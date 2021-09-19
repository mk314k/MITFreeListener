import React from 'react';
import Head from 'next/head'
import {get} from 'url-search-params'
import { userService } from 'services';
import { Link } from 'components';
import JutsuComponent from 'components/JutsuComponent.js';
import listener from './listener';

export default function What() {

  let params = new URLSearchParams(document.location.search.substring(1));
  let talkType = params.get('type')
  
  function handleSubmit(){
    let classYears = ""
    let major = document.getElementById("major").value

    if (document.getElementById("one").checked)
    {
      classYears += "2022&"
    }
    if (document.getElementById("two").checked)
    {
      classYears += "2023&"
    }
    if (document.getElementById("three").checked)
    {
      classYears += "2024&"
    }
    if (document.getElementById("four").checked)
    {
      classYears += "2025&"
    }
    
  }

  return (
    <div className="container">
      <main>
        <h1 className="title"> 
          Who do you want to talk to?
        </h1>

        <p className="subTitle">
          Choose your preferences:
        </p>
        <div className="section">
            <div className="formGrid">
                <p className="buttonLabel"> Class Year: </p>
                <label className="buttonLabel checkBoxText" for="one">
                    <input type="checkbox" className="checkBox" id="one" name="first_item" value="1" />
                        2022
                </label>
                <label className="buttonLabel checkBoxText" for="two">
                    <input type="checkbox" className="checkBox" id="two" name="second_item" value="1" />
                        2023
                </label>
                <label className="buttonLabel checkBoxText" for="three">
                    <input type="checkbox" className="checkBox" id="three" name="third_item" value="1" />
                        2024
                </label>
                <label className="buttonLabel checkBoxText" for="four">
                    <input type="checkbox" className="checkBox" id="four" name="fourth_item" value="1" />
                        2025
                </label>

                </div>

            <div className="formGrid">
                <label className="buttonLabel" for="major">Choose a preferred major:</label>
                <select className="dropDown" name="major" id="major">
                    <option className="dropDownItem" value="Any">Any</option>
                    <option className="dropDownItem" value="1">1</option>
                    <option className="dropDownItem" value="2">2</option>
                    <option className="dropDownItem" value="3">3</option>
                    <option className="dropDownItem" value="4">4</option>
                    <option className="dropDownItem" value="5">5</option>
                    <option className="dropDownItem" value="6">6</option>
                    <option className="dropDownItem" value="7">7</option>
                    <option className="dropDownItem" value="8">8</option>
                    <option className="dropDownItem" value="9">9</option>
                    <option className="dropDownItem" value="10">10</option>
                    <option className="dropDownItem" value="11">11</option>
                    <option className="dropDownItem" value="12">12</option>
                    <option className="dropDownItem" value="14">14</option>
                    <option className="dropDownItem" value="15">15</option>
                    <option className="dropDownItem" value="16">16</option>
                    <option className="dropDownItem" value="17">17</option>
                    <option className="dropDownItem" value="18">18</option>
                    <option className="dropDownItem" value="20">20</option>
                    <option className="dropDownItem" value="21">21</option>
                    <option className="dropDownItem" value="22">22</option>
                    <option className="dropDownItem" value="24">24</option>
                    <option className="dropDownItem" value="CMS">CMS</option>
                    <option className="dropDownItem" value="E&I">E&I</option>
                    <option className="dropDownItem" value="IDSS">IDSS</option>
                </select>
            </div> 

            <div className="grid">
                <button onClick={handleSubmit} className="gridItem buttonLabel">
                  Let's Talk
                </button>
            </div>

            <div className="grid">
              <listener />  
            </div>

        </div>
      </main>

      <footer>
          Built by harryh, henryrh, and mk314k {' '}
      </footer>

      <style jsx>{`
        main {
          padding: 4.5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 20px;
          position: fixed;
          bottom: 20px;
          justify-content: center;
          align-items: center;
          text=align: center;
          padding-left: 425px;
        }

      `}</style>
    </div>
  )
}
