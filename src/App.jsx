import NavbarHeader from "./components/commn/NavbarHeader"
import RecordList from "./components/caloriesFormatted/RecordList"
import CalorieRecordEdit from "./components/edit/CalorieRecordEdit"
function App() {
  const records =[
    {
        date : new Date(2023 , 9 , 25),
        meal : "breakfast",
        content : "rice",
        calories : 210
    },
    {
        date : new Date(2023 , 9 , 26),
        meal : "breakfast",
        content : "rice",
        calories : 210
    },
    {
        date : new Date(2023 , 9 , 27),
        meal : "breakfast",
        content : "rice",
        calories : 210
    },
    {
        date : new Date(2023 , 9 , 28),
        meal : "breakfast",
        content : "rice",
        calories : 210
    },
]
  return (
    <>
      <NavbarHeader />
      <br />
      <CalorieRecordEdit />
      <RecordList records={records} />
    </>
  )
}

export default App
