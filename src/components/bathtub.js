import { useState, useRef } from 'react'

export default function Bathtub() {
  let [waterLevel, setWaterLevel] = useState(0); //used to control height of water in tub
  const [flow, setFlow] = useState("empty"); //used to control appearance of buttons
  const waterLevelRef = useRef(null)
  
  let maxWaterLevel = 9 //declared so 'water' will stop filling at a level of 10
  let emptyWaterLevel = 1 //declared so 'water' will stop draining at a level of 0
  let percentageFull = waterLevel * 10 //used to display 'fullness' of tub
  
  const addWater = () => {
    waterLevelRef.current = setInterval(() => {
      setWaterLevel(waterLevel += 2)
      setFlow("filling up")
      if (waterLevel > maxWaterLevel) {
        stopFlow()
        setFlow("full")
      }
    }, 2000) //every 2 seconds, add 2 to water level, but if water level rises above max level, stop
  }
  
  const removeWater = () => {
    waterLevelRef.current = setInterval(() => {
      setWaterLevel(waterLevel-=2)
      setFlow("draining")
      if (waterLevel < emptyWaterLevel) {
        stopFlow()
        setFlow("empty")
      }
    }, 2000) //every 2 seconds, remove 2 from water level, but if water level sinks below empty, stop
  }
  
  const stopFlow = () => {
    clearInterval(waterLevelRef.current)
  } //used to pause the flow of water
  
  return (
    <>
      <div className="tubHolder">
        <br></br>
        <button onClick={addWater} className={flow === "full" ? "hidden" : ""}>
          Fill Tub
        </button>
        {/* remove users ability to continue filling tub once state is full*/}
        <br></br>
        <br></br>
        <div className="tub">
          <div className={waterLevel > 8 ? "water" : "air"}></div>
          {/* conditionally changes class depending on current water level */}
          <div className={waterLevel > 6 ? "water" : "air"}></div>
          <div className={waterLevel > 4 ? "water" : "air"}></div>
          <div className={waterLevel > 2 ? "water" : "air"}></div>
          <div className={waterLevel > 1 ? "water" : "air"}></div>
        </div>
        <br></br>
        <button
          onClick={removeWater}
          className={flow === "empty" ? "hidden" : ""}>
          Drain Tub
        </button>
        {/* remove users ability to continue draining tub once state is empty */}
        <p>The bathtub is {percentageFull}% full.</p>
        <button onClick={stopFlow}>Turn off the faucet</button>
        <br></br>
        <br></br>
      </div>
    </>
  );
     
}
  
// The component(the whole App) is a bathtub div that fills with water when you press the increaseWaterLevel button.
// Starting with water level 0, once you press the button, every 2 seconds, a new blue - colored div is added inside the bathtub div(but is only 20 pixels high).
// After the level reaches the height of the div(100 pixels; or 5 levels), the water stops filling.

// When you press the decreaseWaterLevel button, every 2 seconds, the water decreases by a div of the same height.
// The water counter shows the height of the water in the div.


       
           
           
           
           
