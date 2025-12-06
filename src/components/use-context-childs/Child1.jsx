import Child2 from "./Child2"
import "../style.css"
function Child1() {
  return (
    <>
    <div className="child-1">
        <p>child-1</p>
        <Child2/>
    </div>

    </>
  )
}

export default Child1