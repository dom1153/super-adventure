"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { Ship } from "@azurapi/azurapi/build/types/ship"
import axios from "axios"
import { Ban, RotateCw } from "lucide-react"

import { isDevEnv } from "@/lib/myutils"

import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip"

// @refresh reset
const AzurApiTest = ({}) => {
  const [shipList, setShipList] = useState([] as Ship[])

  useEffect(() => {
    azurApiCall()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const azurApiCall = useCallback(async () => {
    try {
      await axios
        .get("/api/azur/test", {})
        .then((res) => {
          const ships: Ship[] = res.data.list
          setShipList(ships)
        })
        .catch((err) => {
          console.log(err)
        })
    } catch (error) {
      console.error("Callback: error!")
      console.log(error)
    } finally {
      // console.info("Callback: success!")
    }
  }, [])

  const resetList = useCallback(async () => {
    setShipList([] as Ship[])
  }, [])

  const DummyCard = (i: any) => {
    return (
      <div className="">
        <Card className="w-40">
          <div className="flex justify-center py-1">
            <p>{`🅱️enterprise`}</p>
          </div>
          <CardContent className="relative p-0">
            <img
              src={`https://azurlane.netojuu.com/images/6/64/EnterpriseShipyardIcon.png`}
              alt="Default"
              className=""
            />
            {false && (
              <div className="absolute bottom-3 left-0 w-full bg-zinc-950">
                <p className="text-center">{`🅱️enterprise`}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  const genShipCard = (ship: Ship) => {
    return (
      <div key={ship.id} className="">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={ship.wikiUrl} target="_blank">
                {/* TODO: this needs to be a custom card class */}
                <Card className="w-40">
                  <div className="flex justify-center py-1">
                    <p>{ship.names.en}</p>
                  </div>
                  <CardContent className="relative p-0">
                    <img src={ship.thumbnail} alt="Default" className="" />
                    {false && (
                      <div className="absolute bottom-3 left-0 w-full bg-zinc-950">
                        <p className="text-center">{ship.names.en}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            </TooltipTrigger>
            <TooltipContent className="font-mono">
              <div className="">
                <p>id: {ship.id}</p>
                <p>hull: {ship.hullType}</p>
                <p>faction: {ship.nationality}</p>
                <p>rarity: {ship.rarity}</p>
                <p>class: {ship.class}</p>
                <p>retrofit: {ship.retrofit ? "y" : "n"}</p>
                <p>
                  skins:{" "}
                  {ship.skins.reduce((partialSum, i) => partialSum + 1, 0)}
                </p>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    )
  }

  return (
    <Card className="flex flex-col gap-5 p-5">
      {
        <div className="flex items-center gap-5">
          <Button onClick={azurApiCall}>
            <RotateCw className="mr-2 size-4" /> Reload
          </Button>
          <Button onClick={resetList}>
            <Ban className="mr-2 size-4" /> Reset
          </Button>

          <p>Ship Count: {shipList.length}</p>
        </div>
      }

      {/* this solution works, but does not fill the card size */}
      {/* based on AL wiki showing ship drops from event... */}
      <div
        className="grid justify-evenly gap-y-5"
        style={{
          gridTemplateColumns: "repeat(auto-fill, 162px)",
        }}
      >
        {shipList.length > 0
          ? shipList.map((ship: Ship) => {
              return genShipCard(ship)
            })
          : Array.from(Array(10).keys()).map((i) => {
              if (!isDevEnv) return null
              return <DummyCard i={i} key={`card-${i}`} />
            })}
      </div>
    </Card>
  )
}

export default AzurApiTest
