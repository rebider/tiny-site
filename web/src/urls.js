const prefix = "";

export const USERS = `${prefix}/users/v1`;
export const USERS_UPDATE = `${prefix}/users/v1/update/:id`;
export const USERS_ME = `${prefix}/users/v1/me`;
export const USERS_LOGIN = `${prefix}/users/v1/me/login`;
export const USERS_LOGOUT = `${prefix}/users/v1/me/logout`;
export const USERS_LOGIN_RECORDS = `${prefix}/users/v1/login-records`;

export const CONFIGURATIONS = `${prefix}/configurations`;
export const CONFIGURATIONS_ADD = `${CONFIGURATIONS}/v1`;
export const CONFIGURATIONS_UPDATE = `${CONFIGURATIONS}/v1/:id`;
export const CONFIGURATIONS_DELETE = `${CONFIGURATIONS}/v1/:id`;
export const CONFIGURATIONS_LIST = `${CONFIGURATIONS}/v1`;
export const CONFIGURATIONS_LIST_AVAILABLE = `${CONFIGURATIONS}/v1/available`;
export const CONFIGURATIONS_LIST_UNAVAILABLE = `${CONFIGURATIONS}/v1/unavailable`;

export const ROUTERS = `${prefix}/commons/routers`;

export const RANDOM_KEYS = `${prefix}/commons/random-keys`;

export const CAPTCHA = `${prefix}/commons/captcha`;

export const FILES = `${prefix}/files`;
export const FILES_LIST = `${FILES}/v1`;
export const FILES_DETAIL = `${FILES}/v1/detail/:fileID`;
export const FIELS_UPLOAD = `${FILES}/v1/upload`;
export const FIELS_DOWNLOAD = `${FILES}/v1/download`;
export const FIELS_UPLOAD_UPDATE = `${FILES}/v1/upload/:fileID`;
export const FILES_ZONES_LIST_MINE = `${FILES}/v1/zones/mine`;
export const FILES_ZONES_LIST = `${FILES}/v1/zones`;
export const FILES_ZONES_ADD = `${FILES}/v1/zones`;
export const FILES_ZONES_UPDATE = `${FILES}/v1/zones/:fileZoneID`;
export const FILES_UPLOAD_SAVE = `${FILES}/v1/upload/save`;

export const IMAGES = `${prefix}/images`;
export const IMAGES_CONFIG = `${IMAGES}/v1/config`;
export const IMAGES_OPTIM = `${IMAGES}/v1/optim/:file`;
export const IMAGES_OPTIM_FROM_DATA = `${IMAGES}/v1/optim`;
