import "../utils/styling.css"


type Props = {
    title: string;
    children: React.ReactNode;
}

const TitleContent = ({title, children}: Props) => {
    return (
        <>
            <div className="flex">
                <h1 className="title">{title}</h1>
            </div>
            <div className="">
                <p className="paragraph">
                    {children}   
                </p>
            </div>
        </>
  )
}


export default TitleContent