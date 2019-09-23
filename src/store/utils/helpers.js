let children = []

export const getChild = (obj, id) => {
  const target = obj[id]
  const childId = target.childTableId

  if (childId) {
    children.push(childId)
    getChild(obj, childId)
  }
}