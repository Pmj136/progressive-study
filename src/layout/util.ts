export function pathResolve(parent: string, child: string) {
    const str = parent + child
    // if (child.startsWith('/')) return str
    return str.replace(/\/\//g, '/')
}
