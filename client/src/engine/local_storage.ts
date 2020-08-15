const saveToLocalStorage = (settingName: string, value: string): boolean => {
  if (storageAvailable()) {
    window.localStorage.setItem(settingName, value);
    return true;
  } else {
    return false;
  }
};

const getFromLocalStorage = (settingName: string): string => {
  if (storageAvailable()) {
    const value = window.localStorage.getItem(settingName);
    if (value === null) {
      return '';
    } else {
      return value;
    }
  } else {
    return '';
  }
};

/* Check if localStorage is available */
const storageAvailable = (): boolean => {
  try {
    const storage = window.localStorage;
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      window.localStorage &&
      window.localStorage.length !== 0
    );
  }
};

export { saveToLocalStorage, getFromLocalStorage };
