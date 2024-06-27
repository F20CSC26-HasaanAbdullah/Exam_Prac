import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface cardwrapperprops {
  children?: React.ReactNode
  title?: string
  description?: string

}



export const Card1 = ({ children, title, description }: cardwrapperprops) => {
  return (
    <Card >
      <CardHeader>
        <CardTitle>{null}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}
