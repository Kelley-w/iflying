import http from '../utils/http';
//热门
export const handleHotOne=(params)=>http("get","/api/Public/GetAdList?posid=5aa22782b0ae1c9577023062&stationid=1&typeid=&randomnumber=0.044331415579134115&fystid=nb",params);
export const handleHotTwo=(params)=>http("get","/api/Public/GetAdList?posid=5aa2278fb0ae1c5977023064&stationid=1&typeid=&randomnumber=0.9008349318466944&fystid=nb",params);
export const handleHotThree=(params)=>http("get","/api/Public/GetAdList?posid=5aa22799b0ae1c8978023058&stationid=1&typeid=&randomnumber=0.3140961993670277&fystid=nb",params);

