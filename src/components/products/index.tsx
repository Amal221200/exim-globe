import "./styles.scss"

const Products = ({ heading, data }: { heading?: string, data: Array<{ img: string, label?: string }> }) => {
    return (
        <section className="products white">
            {heading && <h2 className="section-heading">{heading}</h2>}
            <div className="container">
                {
                    data.map((item, key) => (
                        <div key={key} className="item">
                            <div>
                                <img src={item.img} alt="" />
                            </div>
                            {item.label && <h6>{item.label}</h6>}
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Products