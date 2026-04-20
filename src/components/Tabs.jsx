import React from 'react'

function Tabs(props) {

const {todos, tabSelected, setTabSelected} = props;
const tabs = ["All", "Open", "Done"];

const handleTabSelected = function (activeTab){
    setTabSelected(activeTab);
}

return (
    <div>
        {tabs.map((tab, index)=> {
            return (
                <button key={index} 
                    onClick={()=>{handleTabSelected(tab)}} 
                    className={tab === tabSelected ? 'tab-selected' : '' }><h2>{tab}(
                    {tab === "All" ? todos?.length : tab === "Open" ? 
                    todos?.filter(val => !val.complete).length : 
                    todos?.filter(val => val.complete).length}
                )</h2></button>
            )
        })}
    </div>
  )
}

export default Tabs