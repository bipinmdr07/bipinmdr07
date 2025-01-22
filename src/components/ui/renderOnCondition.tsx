const RenderOnCondition = ({ condition, children }: { condition: boolean, children: JSX.Element }) => {
  if (!condition) return null

  return children
}

export default RenderOnCondition
