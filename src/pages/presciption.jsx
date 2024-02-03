import { useStateContext } from '../context';
const Prescription = () => {

    const { weather, thisLocation, values, place, setPlace } = useStateContext('');
   // console.log(values[0].uvindex)
  // Assuming values is an array of objects
  for (var i = 0; i < 16; i++) {
    // Check if the object at the specified index exists before accessing properties
    // if (values[i] && values[i].uvindex !== undefined && parseFloat(values[i].uvindex) > 1.5) {
    //   alert("wear sunscreen uv rays can damage your skin")
    //   break;
    // }
  }
  
  
    return (
        <>
            <h1 style={{
                color: 'black',
            }}>this is something! prescriptive</h1>
        </>
    )
}

export default Prescription
