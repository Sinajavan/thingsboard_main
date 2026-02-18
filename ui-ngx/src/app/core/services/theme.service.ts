///
/// Copyright © 2016-2026 The Thingsboard Authors
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
// import { LocalStorageService } from '@core/local-storage/local-storage.service'; // Assuming implicit resolution or correct path

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    private darkThemeClass = 'tb-dark';
    private defaultThemeClass = 'tb-default';
    private storageKey = 'tb-dark-mode';

    constructor(@Inject(DOCUMENT) private document: Document) {
        this.initTheme();
    }

    private initTheme() {
        const isDark = localStorage.getItem(this.storageKey) === 'true';
        if (isDark) {
            this.setDarkTheme();
        } else {
            this.setDefaultTheme();
        }
    }

    toggleTheme() {
        const isDark = this.document.body.classList.contains(this.darkThemeClass);
        if (isDark) {
            this.setDefaultTheme();
            localStorage.setItem(this.storageKey, 'false');
        } else {
            this.setDarkTheme();
            localStorage.setItem(this.storageKey, 'true');
        }
    }

    private setDarkTheme() {
        this.document.body.classList.add(this.darkThemeClass);
    }

    private setDefaultTheme() {
        this.document.body.classList.remove(this.darkThemeClass);
    }

    isDark(): boolean {
        return this.document.body.classList.contains(this.darkThemeClass);
    }
}
