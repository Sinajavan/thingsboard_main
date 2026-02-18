#!/bin/bash
echo "Starting ThingsBoard (Debug Mode)..."
export JAR_FILE=/usr/share/thingsboard/bin/thingsboard.jar
export CONF_DIR=/config
export LOADER_PATH=$CONF_DIR,/usr/share/thingsboard/conf,/usr/share/thingsboard/extensions
export LOG_FILENAME=thingsboard.out

if [ -z "$JAVA_OPTS" ]; then
    echo "Using default memory settings"
    export JAVA_OPTS="-Xmx2048M -Xms2048M -Xss384k -XX:+AlwaysPreTouch"
fi

if [[ "$JAVA_OPTS" != *"-agentlib:jdwp"* ]]; then
    echo "Adding debug agent"
    export JAVA_OPTS="$JAVA_OPTS -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005"
fi

if [ "$INSTALL_TB" == "true" ]; then
    echo "Starting ThingsBoard Installation..."
    export JAVA_OPTS="$JAVA_OPTS -Dloader.main=org.thingsboard.server.ThingsboardInstallApplication"
    export JAVA_OPTS="$JAVA_OPTS -Dinstall.load_demo=${LOAD_DEMO:-false}"
else
    export JAVA_OPTS="$JAVA_OPTS -Dloader.main=org.thingsboard.server.ThingsboardServerApplication"
fi

# Essential ThingsBoard properties from thingsboard.conf
export JAVA_OPTS="$JAVA_OPTS -Dplatform=deb"
export JAVA_OPTS="$JAVA_OPTS -Dinstall.data_dir=/usr/share/thingsboard/data"
export JAVA_OPTS="$JAVA_OPTS -Dspring.config.name=thingsboard"

export JAVA_OPTS="$JAVA_OPTS -Dspring.jpa.hibernate.ddl-auto=none"
export JAVA_OPTS="$JAVA_OPTS -Dlogging.config=$CONF_DIR/logback.xml"
export JAVA_OPTS="$JAVA_OPTS -Dthingsboard.log.dir=/var/log/thingsboard"

if [ ! -z "$TB_KAFKA_SERVERS" ]; then
    export JAVA_OPTS="$JAVA_OPTS -DTB_KAFKA_SERVERS=$TB_KAFKA_SERVERS"
fi

echo "JAVA_OPTS=$JAVA_OPTS"

exec java $JAVA_OPTS -cp "$JAR_FILE" -Dloader.path="$LOADER_PATH" org.springframework.boot.loader.PropertiesLauncher
