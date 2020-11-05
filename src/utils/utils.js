export const actionCreator = type => (payload = {}) => ({
    type,
    ...payload
});

const actionTypeCreator = (actionStatus, actionType) => `${actionType}__${actionStatus}`;

export const requestCreator = actionType => actionTypeCreator('REQUEST', actionType);
export const successCreator = actionType => actionTypeCreator('SUCCESS', actionType);

export const separateString = str => {
    if(str==='') return ''
    let strAfterSeparate=str.split('-')
    return strAfterSeparate.map((el, index) =>
        el.match('[0-9][0-9][0-9][0-9]')
            ? index === 0 ? `${el}-01-01` : `${el}-12-31`
            : el
    )
}

export const API__KEY = 'ad3d2f61c87bca974e5834f0b4a680d8';
export const transformData = data =>data && data.replace(/(\d+)-(\d+)-(\d+)/, '$3/$2/$1');
