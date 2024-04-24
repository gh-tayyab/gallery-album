import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FolderType } from "./page"
import Link from "next/link"

const FolderList = ({folder}:{folder:FolderType}) => {
  return (
    <Card className=""> 
    <CardHeader>
      <CardTitle>{folder.name}</CardTitle>
      <CardDescription>Please click now to view the picture</CardDescription>
    </CardHeader>
  
    <CardFooter className="flex justify-start">
     <Link href={`/Album/${folder.name}`}>
     <Button variant="outline">View Album</Button>
     </Link>
    
    </CardFooter>
  </Card>
  )
}

export default FolderList
