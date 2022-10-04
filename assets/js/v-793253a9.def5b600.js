"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[11026],{11511:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o={key:"v-793253a9",path:"/devices/WXCJKG11LM.html",title:"Xiaomi WXCJKG11LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi WXCJKG11LM control via MQTT",description:"Integrate your Xiaomi WXCJKG11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2019-12-15T17:27:48.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing Instructions",slug:"pairing-instructions",children:[]},{level:3,title:"Binding",slug:"binding",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Operation_mode (enum)",slug:"operation-mode-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/WXCJKG11LM.md",git:{updatedTime:1664898964e3}}},3541:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});const o=(0,i(66252).uE)('<h1 id="xiaomi-wxcjkg11lm" tabindex="-1"><a class="header-anchor" href="#xiaomi-wxcjkg11lm" aria-hidden="true">#</a> Xiaomi WXCJKG11LM</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>WXCJKG11LM</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>Aqara Opple switch 1 band</td></tr><tr><td>Exposes</td><td>battery, voltage, action, operation_mode, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/WXCJKG11LM.jpg" alt="Xiaomi WXCJKG11LM"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing-instructions" tabindex="-1"><a class="header-anchor" href="#pairing-instructions" aria-hidden="true">#</a> Pairing Instructions</h3><p>Press and hold the button on the backside of the device until the blue light starts blinking, release it and the pairing should begin.</p><h3 id="binding" tabindex="-1"><a class="header-anchor" href="#binding" aria-hidden="true">#</a> Binding</h3><p>By default the switch is bound to the coordinator but this device can also be used to directly control other lights and switches in the network.</p><p>First unbind it from the coordinator, then you can bind it to any other device or group. (see ../guide/usage/binding.md )</p><p>Now change the operation mode of the device, by default it is in <code>event</code> mode, but when binding we need to change it to <code>command</code> mode. To do this send to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> payload <code>{&quot;operation_mode&quot;: &quot;command&quot;}</code>, right before doing this make sure to wakeup the device.</p><p>As the device is sleeping by default, you need to wake it up after sending the bind/unbind command by pressing the reset button once.</p><p>When bound to a lamp, the behavior is as follows (for WXCJKG11LM Aqara Opple switch 1 band):</p><ul><li>left click: turn off</li><li>right click: turn on</li><li>left double click: light dim down (by steps of 33%)</li><li>right double click: light dim up (by steps of 33%)</li><li>long left click: warm white</li><li>long right click: cold white</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>button_1_hold</code>, <code>button_1_release</code>, <code>button_1_single</code>, <code>button_1_double</code>, <code>button_1_triple</code>, <code>button_2_hold</code>, <code>button_2_release</code>, <code>button_2_single</code>, <code>button_2_double</code>, <code>button_2_triple</code>.</p><h3 id="operation-mode-enum" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum" aria-hidden="true">#</a> Operation_mode (enum)</h3><p>Operation mode, select &quot;command&quot; to enable bindings (wake up the device before changing modes!). Value can be found in the published state on the <code>operation_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>command</code>, <code>event</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',23),d={},a=(0,i(83744).Z)(d,[["render",function(e,t){return o}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,o]of t)e[i]=o;return e}}}]);