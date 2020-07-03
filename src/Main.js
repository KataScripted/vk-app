import React from 'react';
import { Text, View, Link, Header, Avatar, PanelHeader, Title, Cell } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import bridge from "@vkontakte/vk-bridge";

import jsonExercises from './Exercise/exercises.json'
import pushUpsImage from './img/push_ups_new.png'


class Main extends React.Component {

     constructor(props) {
          super(props);
          this.state = {
               username: '',
               allData: [],
               id: null
          }
          this.changePanelNow = this.changePanelNow.bind(this);
     }

     componentDidMount() {
          // const response = bridge.send("VKWebAppGetUserInfo", {});
          // alert(JSON.stringify(response))


          //         bridge.send("VKWebAppGetUserInfo", {}); 
          // bridge.subscribe((e) => { 
          //   alert(e.data); 
          // });
          const data = bridge.send('VKWebAppGetUserInfo', {});
          console.log(data)
     }

     changePanelNow(panel, id, prevId) {
          this.props.chanePanel(panel, id, prevId);
     }

     render() {
          return (

               <div>

                    <div style={{ padding: 10 }}>



                         <Title level="1" weight="bold" style={{ marginBottom: 5 }}>Рекомендуем</Title>
                         <div>

                              <div style={{ display: "grid", justifyContent: 'space-between' }}>



                              </div>

                              {jsonExercises.slice(0, 5).map(data => {
                                   return (
                                        <div style={{ border: "1px solid silver", borderRadius: 3, marginTop: 10 }}
                                             onClick={() => data.multi ? this.changePanelNow("allExercise", data.id, data.id) : this.changePanelNow("exercise", data.id, 0)}>
                                             <img src={data.image} style={{ maxWidth: "100%" }}></img>
                                             <Text style={{ backgroundColor: "#f7f7f7", borderTop: "1px solid silver", padding: 8, fontSize: 18 }}>{data.title}</Text>
                                        </div>
                                   )
                              })}

                              <Title level="1" weight="bold" style={{ marginBottom: 16, marginTop: 15 }}>Другие</Title>

                              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>

                                   {jsonExercises.slice(5, 11).map(data => {
                                        return (
                                             <div style={{ border: "1px solid silver", borderRadius: 3, marginTop: 10, width: "48%" }}
                                                  onClick={() => data.multi ? this.changePanelNow("allExercise", data.id, data.id) : this.changePanelNow("exercise", data.id, 0)}>
                                                  <img src={data.image} style={{ maxWidth: "100%" }}></img>
                                                  <Text style={{ backgroundColor: "#f7f7f7", borderTop: "1px solid silver", padding: 8, fontSize: 18 }}>{data.title}</Text>
                                             </div>
                                        )
                                   })}

                              </div>

                         </div>

                    </div>


               </div>




          );
     }
}

export default Main;