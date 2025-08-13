import { titleStyle } from "./shared"

type Props = {
    title: string;
    children: React.ReactNode;
}

const TitleContent = ({title, children}: Props) => {
  return (
    <>
        <div className="flex">
            <h1 className={titleStyle}>{title}</h1>
        </div>
        <div className="gap-4">
            <p className="ml-3">
                {children}    
            </p>
        </div>
    </>
  )
}

export default TitleContent