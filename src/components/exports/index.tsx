import "./styles.scss"
import Export from "../export"
import { exportsData } from "@/lib/data"

const Exports = () => {
  return (
    <section id="exports">
      <h2 className="section-heading">What We Export</h2>
      <div className="container">
        {
          exportsData.map((exportData, key) => (
            <Export key={key} exportData={exportData} />
          ))
        }
      </div>
    </section >
  )
}

export default Exports