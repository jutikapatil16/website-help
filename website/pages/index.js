import { useRouter } from "next/router";
import moment from "moment";
import { YearPicker, MonthPicker, DayPicker } from 'react-dropdown-date';
import { useState , useEffect} from "react";

moment().format();

export default function Age() {
  const router = useRouter();
  const [userFound, setUserFound] = useState(false);
  const [year,setYear] = useState(2023);
  const [month, setMonth] = useState(3);
  const [day, setDay] = useState(26);

  useEffect(() => {
    const token = localStorage.getItem("userAge");
    if(token!==null)
    {
      setUserFound(true);
    }
    if(userFound)
   {
     router.push('/home');
   }
  }, [router, userFound]);

  const handleClick = (event) => {
    event.preventDefault();
    var age=0;
    var date = document.getElementById("dob").value;
    var splitDate = date.split("-");
    var diff = moment([
      parseInt(splitDate[0]),
      parseInt(splitDate[1]),
      parseInt(splitDate[2]),
    ]).toNow(true);
    age = diff.split(" ")[0];
    if (age == "a") {
      age = 1;
    }
    if (age >= 18) {
      localStorage.setItem("userAge", JSON.stringify(age));
      router.push("/home");
    } else {
      router.push("/underAge");
    }
  };
  
  return (
    <div className="@apply min-h-full flex justify-center my-32  "  >
      <div className="max-w-md w-full space-y-8">
        <div >
            <video playsInline autoPlay muted loop poster="https://www.monastichill.com/game_title_english_karosthi.mp4" >
              <source src='https://www.monastichill.com/game_title_english_karosthi.mp4' type='video/mp4'/>
            </video>
          <h2 className="text-yellow-100 text-center text-3xl drop-shadow-[2px_2px_3px_rgba(255,255,255)]">
            ENTER YOUR DATE OF BIRTH
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className=" -space-y-px">
            <div className="flex justify-center">
              {/* <input
                type="date"
                id="dob"
                placeholder="YYYY-MM-DD"
                className="border border-red-500 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              /> */}
              <div>
        <YearPicker
          defaultValue={'select year'}
          start={1960}                // default is 1900
          reverse                     // default is ASCENDING
          required={true}             // default is false
          
          value={year}     // mandatory
          onChange={(year) => {       // mandatory
            setYear({ year });
            console.log('year',year);
          }}
          id={'year'}
          name={'year'}
          classes={'classes'}
          optionClasses={'option classes'}
        />
        <MonthPicker
          defaultValue={'select month'}
          numeric                   // to get months as numbers
          short                     // default is full name
          caps                      // default is Titlecase
          endYearGiven              // mandatory if end={} is given in YearPicker
          year={year}    // mandatory
          required={true}           // default is false
          value={month}  // mandatory
          onChange={(month) => {    // mandatory
            setMonth({ month });
            console.log('month',month);
          }}
          id={'month'}
          name={'month'}
          classes={'classes'}
          optionClasses={'option classes'}
        />
        <DayPicker
          defaultValue={'select day'}
          year={year}    // mandatory
          month={month}  // mandatory
          endYearGiven              // mandatory if end={} is given in YearPicker
          required={true}           // default is false
          value={day}    // mandatory
          onChange={(day) => {      // mandatory
            setDay( day);
            console.log('day',day);
          }}
          id={'day'}
          name={'day'}
          classes={'classes'}
          optionClasses={'option classes'}
        />
      </div>

            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="text-yellow-100 bg-red-500 hover:bg-[#45ddf8cc] hover:text-yellow-100 active:bg-red-600 font-bold uppercase px-8 py-3 rounded mr-1 mb-1 ease-linear transition-all duration-200 shadow-lg shadow-[5px_5px_0px_0px_rgba(69,221,248)] hover:shadow-none"
              type="button"
              onClick={(event) => handleClick(event)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );







}
