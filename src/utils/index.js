export function maxComponent(items, type, max) {
    return items.filter(item => item.categoryName.includes(type)).length > max
}

export function find(items, type, model) {
    return items.find(item => item[type].includes(model))
}

export function findObj(obj, items) {
    return Object.entries(obj).filter( entry => {
        const [key, value] = entry
        return value.find( value => 
            find(items, key, value)
        )}
    )
}