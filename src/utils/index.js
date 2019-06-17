export function findComponent(items, component) {
    return items.find(item => item.type === component)
}

export function maxComponent(items, component, max) {
    return items.filter(item => item.type === component).length > max
}