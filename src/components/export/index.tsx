import "./style.scss"
const Export = ({ exportData }: { exportData: { img: string, link: string, title: string, description: string } }) => {
    return (
        <div className="export-box">
            <div className="content">
                <a href={exportData.link}>
                    <img src={exportData.img} alt="" />
                </a>
                <h3>{exportData.title}</h3>
                <p>{exportData.description}</p>
            </div>

            <a href={exportData.link} className="btn btn-primary">KNOW MORE</a>
        </div>
    )
}

export default Export