import "../utils/styling.css"


type Props = {
    title: string;
    children: React.ReactNode;
}

const TitleContent = ({title, children}: Props) => {
    return (
        <div className="sticky">
            <div className="flex">
                <h1 className="title">{title}</h1>
            </div>
            <div className="fadedBg py-10">
                <p className="paragraph">
                    {children}   
                </p>
            </div>
        </div>
  )
}


export default TitleContent