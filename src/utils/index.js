export function findComponent(items, type) {
    return items.find(item => item.categoryName.includes(type))
}

export function maxComponent(items, type, max) {
    return items.filter(item => item.categoryName.includes(type)).length > max
}