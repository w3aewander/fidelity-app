import React from "react";
import {View} from 'react-native';
import CheckinLogRow from "./CheckinLogRow";
import checkinLog from '../data/checkin_log'


const WLogCheckin = props => {

    return(<View>
      
          <CheckinLogRow>
          {checkinLog.map = ( log, i) =>{
            <li>{log}</li>
          }}  
          </CheckinLogRow>
    </View>)
}

export default WLogCheckin;