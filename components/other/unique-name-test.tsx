"use client"

import { useCallback, useEffect, useState } from "react"
import { Copy, Dices } from "lucide-react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import toast, { Toaster } from "react-hot-toast"
import { adjectives, uniqueNamesGenerator } from "unique-names-generator"

import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"

interface UniqueNameGenProps {}

const UniqueNameGen: React.FC<UniqueNameGenProps> = ({}) => {
  const [uniqueName, setUniqueName] = useState("")

  function randomizeName() {
    const name = uniqueNamesGenerator({
      dictionaries: [adjectives, adjectives],
      separator: "-",
      length: 2,
    })
    return name
  }

  const randomizeNameCb = useCallback(() => {
    setUniqueName(randomizeName())
  }, [])

  // empty dep array means this only runs after component mounts!
  useEffect(() => {
    setUniqueName(randomizeName())
  }, [])

  return (
    <>
      <Toaster />
      <Card>
        <CardHeader>
          <CardTitle>Unique Name Generator</CardTitle>
          <CardDescription>
            Suggestions like when you create a github repo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <div className="flex">
              <p>Need inspiration? How about&nbsp;</p>
              <CopyToClipboard
                text={uniqueName}
                onCopy={() => toast.success("Copied to clipboard")}
              >
                <p className="flex cursor-pointer">
                  <span className="font-bold text-green-500">{uniqueName}</span>
                  <Copy className="my-auto ml-2 size-4" />
                </p>
              </CopyToClipboard>
            </div>
            <div className="flex gap-5">
              <Button onClick={randomizeNameCb}>
                <Dices className="mr-2 size-4" /> Randomize
              </Button>
              <CopyToClipboard
                text={uniqueName}
                onCopy={() => toast.success("Copied to clipboard")}
              >
                <Button variant={"secondary"}>
                  <Copy className="mr-2 size-4" /> Copy to clipboard
                </Button>
              </CopyToClipboard>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default UniqueNameGen
