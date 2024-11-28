"use client"

import { useEffect } from "react"

interface FoobarProps {}

const Foobar: React.FC<FoobarProps> = ({}) => {
  useEffect(() => {
    var twoSum = function (nums: any, target: any) {
      return nums[0] + target
    }

    console.log("twoSum: ", twoSum([10, 20], 2))
  }, [])

  return (
    <>
      <p>Foobar</p>
    </>
  )
}

export default Foobar
