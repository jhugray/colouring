import React from "react";

class HelloWorld extends React.Component {
  render() {
    return (
      <svg
        version="1.1"
        space="preserve"
        xlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        height="380px"
        viewBox="500 0 2400 2400"
        width="380px"
      >
          <g id="Layer 1">
        <rect 
         onClick={() => this.props.onFill(8) }
         x="0" y="0"
         rx="20" ry="20"
         width="3200" height="3200" 
         fill={this.props.fillColours[8]} 
         strokeWidth="3" 
         stroke="#000000" />
        </g>
        <g id="Layer 2">
          <g opacity="0.913149">
            <path
            onClick={() => this.props.onFill(9)}
              d="M1038.33+610.789L1038.33+651.949L1161.81+651.949L1161.81+610.789C1161.81+598.637+1161.61+591.973+1161.22+590.797C1160.05+582.565+1156.32+578.449+1150.05+578.449C1147.31+578.449+1144.95+578.645+1142.99+579.037L1137.7+579.037C1120.45+579.037+1111.83+567.081+1111.83+543.169C1111.83+530.233+1115.46+519.845+1122.71+512.005C1129.96+504.165+1139.47+500.245+1151.23+500.245C1159.07+500.245+1170.83+501.225+1186.51+503.185C1202.19+505.145+1213.95+506.125+1221.79+506.125C1231.98+506.125+1244.72+505.341+1260.01+503.773C1286.66+501.029+1299.79+499.657+1299.4+499.657C1311.95+499.657+1322.04+503.675+1329.68+511.711C1337.33+519.747+1341.15+530.233+1341.15+543.169C1341.15+554.145+1338.11+563.357+1332.04+570.805C1325.96+578.253+1318.41+581.977+1309.4+581.977C1305.87+581.977+1301.07+581.291+1294.99+579.919C1288.92+578.547+1284.31+577.861+1281.17+577.861C1273.33+577.861+1268.24+582.761+1265.89+592.561C1265.1+596.481+1264.71+604.713+1264.71+617.257L1264.71+780.133C1264.71+806.789+1270+820.117+1280.59+820.117C1283.72+820.117+1288.43+819.431+1294.7+818.059C1300.97+816.687+1305.67+816.001+1308.81+816.001C1317.83+816.001+1325.47+819.725+1331.74+827.173C1338.01+834.621+1341.15+843.833+1341.15+854.809C1341.15+867.745+1337.33+878.231+1329.68+886.267C1322.04+894.303+1311.95+898.321+1299.4+898.321C1299.01+898.321+1298.23+898.321+1297.05+898.321C1296.27+897.929+1295.48+897.733+1294.7+897.733C1286.86+897.733+1275.1+896.753+1259.42+894.793C1243.74+892.833+1231.78+891.853+1223.55+891.853C1208.26+891.853+1195.33+892.637+1184.74+894.205C1168.67+896.557+1157.3+897.733+1150.64+897.733C1139.27+897.733+1129.96+893.715+1122.71+885.679C1115.46+877.643+1111.83+867.157+1111.83+854.221C1111.83+830.309+1120.45+818.353+1137.7+818.353C1140.05+818.353+1141.82+818.549+1142.99+818.941C1144.17+818.941+1145.54+818.941+1147.11+818.941C1148.68+819.333+1149.66+819.529+1150.05+819.529C1156.32+819.529+1160.05+815.217+1161.22+806.593C1161.61+802.281+1161.81+795.617+1161.81+786.601L1161.81+728.389L1038.33+728.389L1038.33+786.601C1038.33+799.929+1038.33+806.789+1038.33+807.181C1039.51+815.413+1043.43+819.529+1050.09+819.529C1050.48+819.529+1051.46+819.333+1053.03+818.941C1054.6+818.941+1055.77+818.941+1056.56+818.941C1057.73+818.549+1059.5+818.353+1061.85+818.353C1079.1+818.353+1087.72+830.309+1087.72+854.221C1087.72+867.157+1084.1+877.643+1076.84+885.679C1069.59+893.715+1060.28+897.733+1048.91+897.733C1041.86+897.733+1031.18+896.753+1016.87+894.793C1002.56+892.833+991.681+891.853+984.233+891.853C967.377+891.853+952.677+892.637+940.133+894.205C921.317+896.557+908.185+897.733+900.737+897.733C888.193+897.733+878.099+893.813+870.455+885.973C862.811+878.133+858.989+867.745+858.989+854.809C858.989+843.833+862.125+834.621+868.397+827.173C874.669+819.725+882.313+816.001+891.329+816.001C894.465+816.001+899.071+816.687+905.147+818.059C911.223+819.431+915.829+820.117+918.965+820.117C929.549+820.117+934.841+806.789+934.841+780.133L934.841+617.257C934.841+590.993+929.549+577.861+918.965+577.861C915.829+577.861+911.223+578.547+905.147+579.919C899.071+581.291+894.269+581.977+890.741+581.977C881.725+581.977+874.179+578.253+868.103+570.805C862.027+563.357+858.989+554.145+858.989+543.169C858.989+530.233+862.909+519.845+870.749+512.005C878.589+504.165+888.781+500.245+901.325+500.245C905.245+500.245+917.789+501.421+938.957+503.773C953.069+505.341+967.181+506.125+981.293+506.125C993.445+506.125+1004.81+505.341+1015.4+503.773C1031.08+501.421+1042.25+500.245+1048.91+500.245C1060.67+500.245+1070.08+504.263+1077.14+512.299C1084.19+520.335+1087.72+530.821+1087.72+543.757C1087.72+567.277+1079.1+579.037+1061.85+579.037L1056.56+579.037C1054.99+578.645+1052.83+578.449+1050.09+578.449C1043.43+578.449+1039.51+582.565+1038.33+590.797C1038.33+591.189+1038.33+597.853+1038.33+610.789Z"
              fill={this.props.fillColours[9]} 
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="14.5506"
              opacity="0.913149"
              stroke="#000000"
            />
            <path
            onClick={() => this.props.onFill(10)}
              strokeLinejoin="round"
              opacity="0.913149"
              strokeLinecap="round"
              fill={this.props.fillColours[10]} 
              stroke="#000000"
              d="M1654.55+722.509C1654.55+738.973+1652.5+749.949+1648.38+755.437C1644.26+760.925+1636.13+763.669+1623.98+763.669L1480.51+763.669C1473.45+763.669+1469.04+764.355+1467.28+765.727C1465.51+767.099+1464.63+770.529+1464.63+776.017C1464.63+792.481+1469.92+806.201+1480.51+817.177C1491.09+828.153+1504.42+833.641+1520.49+833.641C1536.95+833.641+1553.81+824.625+1571.06+806.593C1582.82+794.049+1595.75+787.777+1609.87+787.777C1621.63+787.777+1631.13+791.109+1638.38+797.773C1645.64+804.437+1649.26+812.865+1649.26+823.057C1649.26+845.793+1636.82+865.099+1611.92+880.975C1587.03+896.851+1556.75+904.789+1521.08+904.789C1474.43+904.789+1437.19+890.677+1409.36+862.453C1381.53+834.229+1367.61+796.597+1367.61+749.557C1367.61+702.125+1381.43+663.807+1409.06+634.603C1436.7+605.399+1472.86+590.797+1517.55+590.797C1559.1+590.797+1592.32+602.753+1617.22+626.665C1642.11+650.577+1654.55+682.525+1654.55+722.509ZM1467.57+693.109C1467.57+695.461+1468.16+697.421+1469.33+698.989C1470.51+700.557+1474.63+701.341+1481.68+701.341L1547.54+701.341C1553.42+701.341+1557.04+700.655+1558.42+699.283C1559.79+697.911+1560.47+695.461+1560.47+691.933C1560.47+681.741+1555.97+672.823+1546.95+665.179C1537.93+657.535+1527.35+653.713+1515.2+653.713C1499.52+653.713+1486.78+659.789+1476.98+671.941C1470.71+679.781+1467.57+686.837+1467.57+693.109Z"
              strokeWidth="14.5506"
            />
            <path
            onClick={() => this.props.onFill(11)}
              fill={this.props.fillColours[11]} 
              strokeLinejoin="round"
              strokeWidth="14.5506"
              d="M1808.61+499.069C1819.59+499.069+1825.07+506.321+1825.07+520.825L1825.07+798.949C1825.07+818.549+1828.99+828.349+1836.83+828.349C1839.97+828.349+1842.71+827.957+1845.07+827.173C1847.42+826.389+1850.55+825.997+1854.47+825.997C1871.72+825.997+1880.35+836.189+1880.35+856.573C1880.35+883.621+1868.59+897.145+1845.07+897.145C1844.67+897.145+1829.78+895.969+1800.38+893.617C1791.36+892.833+1781.76+892.441+1771.57+892.441C1762.94+892.441+1753.73+893.029+1743.93+894.205C1727.47+896.165+1717.08+897.145+1712.77+897.145C1702.18+897.145+1693.56+893.519+1686.89+886.267C1680.23+879.015+1676.9+869.509+1676.9+857.749C1676.9+835.797+1686.5+824.821+1705.71+824.821C1708.06+824.821+1711.3+825.507+1715.41+826.879C1719.53+828.251+1722.76+828.937+1725.11+828.937C1731.78+828.937+1735.11+817.961+1735.11+796.009L1735.11+600.205C1735.11+578.253+1731.78+567.277+1725.11+567.277C1722.37+567.277+1718.84+568.061+1714.53+569.629C1712.18+570.413+1709.04+570.805+1705.12+570.805C1686.31+570.805+1676.9+560.025+1676.9+538.465C1676.9+526.313+1680.23+516.709+1686.89+509.653C1693.56+502.597+1702.57+499.069+1713.94+499.069C1717.08+499.069+1723.74+499.657+1733.93+500.833C1747.26+502.401+1757.26+503.185+1763.92+503.185C1772.94+503.185+1780.78+502.401+1787.44+500.833C1796.46+499.657+1803.51+499.069+1808.61+499.069Z"
              opacity="0.913149"
              stroke="#000000"
              strokeLinecap="round"
            />
            <path
            onClick={() => this.props.onFill(12)}
              fill={this.props.fillColours[12]} 
              strokeLinejoin="round"
              opacity="0.913149"
              strokeWidth="14.5506"
              stroke="#000000"
              d="M2022.64+499.069C2033.62+499.069+2039.11+506.321+2039.11+520.825L2039.11+798.949C2039.11+818.549+2043.03+828.349+2050.87+828.349C2054+828.349+2056.75+827.957+2059.1+827.173C2061.45+826.389+2064.59+825.997+2068.51+825.997C2085.75+825.997+2094.38+836.189+2094.38+856.573C2094.38+883.621+2082.62+897.145+2059.1+897.145C2058.71+897.145+2043.81+895.969+2014.41+893.617C2005.39+892.833+1995.79+892.441+1985.6+892.441C1976.97+892.441+1967.76+893.029+1957.96+894.205C1941.5+896.165+1931.11+897.145+1926.8+897.145C1916.21+897.145+1907.59+893.519+1900.93+886.267C1894.26+879.015+1890.93+869.509+1890.93+857.749C1890.93+835.797+1900.53+824.821+1919.74+824.821C1922.09+824.821+1925.33+825.507+1929.44+826.879C1933.56+828.251+1936.79+828.937+1939.15+828.937C1945.81+828.937+1949.14+817.961+1949.14+796.009L1949.14+600.205C1949.14+578.253+1945.81+567.277+1939.15+567.277C1936.4+567.277+1932.87+568.061+1928.56+569.629C1926.21+570.413+1923.07+570.805+1919.15+570.805C1900.34+570.805+1890.93+560.025+1890.93+538.465C1890.93+526.313+1894.26+516.709+1900.93+509.653C1907.59+502.597+1916.61+499.069+1927.97+499.069C1931.11+499.069+1937.77+499.657+1947.97+500.833C1961.29+502.401+1971.29+503.185+1977.95+503.185C1986.97+503.185+1994.81+502.401+2001.47+500.833C2010.49+499.657+2017.55+499.069+2022.64+499.069Z"
              strokeLinecap="round"
            />
            <path
            onClick={() => this.props.onFill(13)}
              strokeLinecap="round"
              stroke="#000000"
              strokeLinejoin="round"
              d="M2269.01+904.789C2220.41+904.789+2182.87+891.069+2156.41+863.629C2129.95+836.189+2116.72+797.577+2116.72+747.793C2116.72+698.401+2129.85+659.887+2156.12+632.251C2182.38+604.615+2219.23+590.797+2266.66+590.797C2313.31+590.797+2350.06+604.517+2376.91+631.957C2403.76+659.397+2417.19+697.029+2417.19+744.853C2417.19+795.029+2404.16+834.229+2378.09+862.453C2352.02+890.677+2315.66+904.789+2269.01+904.789ZM2266.66+663.121C2249.41+663.121+2235.79+670.667+2225.8+685.759C2215.8+700.851+2210.8+721.529+2210.8+747.793C2210.8+774.449+2215.8+795.225+2225.8+810.121C2235.79+825.017+2249.81+832.465+2267.84+832.465C2304.29+832.465+2322.52+804.241+2322.52+747.793C2322.52+691.345+2303.9+663.121+2266.66+663.121Z"
              opacity="0.913149"
              strokeWidth="14.5506"
              fill={this.props.fillColours[13]} 
            />
            <path
            onClick={() => this.props.onFill(14)}
              strokeWidth="14.5506"
              opacity="0.913149"
              strokeLinecap="round"
              fill={this.props.fillColours[14]} 
              stroke="#000000"
              d="M1098.6+1261.71L1138+1514.55L1175.04+1320.51C1176.22+1316.19+1176.8+1312.47+1176.8+1309.33C1176.8+1302.28+1173.47+1298.75+1166.81+1298.75C1165.63+1298.75+1163.08+1299.14+1159.16+1299.93C1158.38+1299.93+1157.2+1299.93+1155.64+1299.93C1154.07+1300.32+1152.89+1300.51+1152.11+1300.51C1137.21+1300.51+1129.76+1288.75+1129.76+1265.23C1129.76+1235.83+1142.9+1221.13+1169.16+1221.13C1175.82+1221.13+1185.23+1221.92+1197.38+1223.49C1215.81+1225.84+1228.16+1227.01+1234.43+1227.01C1235.21+1227.01+1250.89+1225.25+1281.47+1221.72C1286.56+1221.33+1290.88+1221.13+1294.4+1221.13C1306.16+1221.13+1315.87+1225.15+1323.51+1233.19C1331.15+1241.22+1334.98+1251.32+1334.98+1263.47C1334.98+1274.05+1332.13+1283.27+1326.45+1291.11C1320.77+1298.95+1314+1302.87+1306.16+1302.87C1301.85+1302.87+1297.83+1302.18+1294.11+1300.81C1290.39+1299.44+1287.15+1298.75+1284.41+1298.75C1277.74+1298.75+1272.84+1303.65+1269.71+1313.45C1269.71+1313.84+1267.94+1321.49+1264.42+1336.38L1210.91+1573.93C1206.99+1590.01+1204.05+1599.81+1202.09+1603.33C1197.78+1611.57+1189.74+1615.68+1177.98+1615.68C1173.67+1615.68+1167.4+1615.29+1159.16+1614.51C1155.24+1614.11+1148.38+1613.92+1138.58+1613.92C1130.35+1613.92+1123.1+1614.11+1116.83+1614.51L1098.01+1615.68C1098.01+1615.68+1097.03+1615.68+1095.07+1615.68C1084.88+1615.68+1077.82+1612.15+1073.9+1605.1C1069.98+1598.04+1066.06+1581.97+1062.14+1556.88L1030.39+1351.67L998.051+1556.88C994.131+1581.97+990.211+1598.04+986.291+1605.1C982.371+1612.15+975.315+1615.68+965.123+1615.68C961.595+1615.68+954.343+1615.29+943.367+1614.51C937.879+1614.11+930.823+1613.92+922.199+1613.92C917.887+1613.92+911.321+1614.21+902.501+1614.8C893.681+1615.39+887.115+1615.68+882.803+1615.68C871.043+1615.68+863.007+1611.57+858.695+1603.33C856.735+1600.2+853.795+1590.4+849.875+1573.93L842.819+1543.95L795.779+1336.38C794.211+1328.93+792.643+1321.29+791.075+1313.45C787.547+1303.65+782.647+1298.75+776.375+1298.75C773.239+1298.75+769.907+1299.34+766.379+1300.51C761.675+1302.08+757.755+1302.87+754.619+1302.87C746.779+1302.87+739.919+1298.95+734.039+1291.11C728.159+1283.27+725.219+1273.86+725.219+1262.88C725.219+1250.73+729.139+1240.73+736.979+1232.89C744.819+1225.05+754.619+1221.13+766.379+1221.13C773.043+1221.13+782.941+1222.11+796.073+1224.07C809.205+1226.03+819.299+1227.01+826.355+1227.01C832.627+1227.01+844.975+1225.84+863.399+1223.49C875.551+1221.92+884.959+1221.13+891.623+1221.13C917.887+1221.13+931.019+1235.05+931.019+1262.88C931.019+1287.97+923.571+1300.51+908.675+1300.51C907.891+1300.51+906.715+1300.32+905.147+1299.93C903.579+1299.93+902.207+1299.93+901.031+1299.93C897.111+1299.14+894.759+1298.75+893.975+1298.75C887.311+1298.75+883.979+1302.47+883.979+1309.92C883.979+1313.06+884.371+1316.59+885.155+1320.51L922.787+1514.55L961.595+1261.71C964.339+1244.85+967.279+1233.87+970.415+1228.78C973.551+1223.68+979.039+1221.13+986.879+1221.13C991.583+1221.13+998.835+1221.62+1008.64+1222.6C1018.44+1223.58+1025.69+1224.07+1030.39+1224.07C1035.1+1224.07+1042.25+1223.58+1051.85+1222.6C1061.46+1221.62+1068.61+1221.13+1073.32+1221.13C1083.12+1221.13+1089.78+1225.64+1093.31+1234.66C1094.48+1237.79+1096.25+1246.81+1098.6+1261.71Z"
              strokeLinejoin="round"
            />
            <path
            onClick={() => this.props.onFill(15)}
              opacity="0.913149"
              fill={this.props.fillColours[15]} 
              strokeLinecap="round"
              d="M1498.44+1625.68C1449.83+1625.68+1412.3+1611.96+1385.84+1584.52C1359.38+1557.08+1346.15+1518.47+1346.15+1468.68C1346.15+1419.29+1359.28+1380.78+1385.54+1353.14C1411.81+1325.5+1448.66+1311.69+1496.09+1311.69C1542.74+1311.69+1579.49+1325.41+1606.34+1352.85C1633.19+1380.29+1646.62+1417.92+1646.62+1465.74C1646.62+1515.92+1633.58+1555.12+1607.51+1583.34C1581.45+1611.57+1545.09+1625.68+1498.44+1625.68ZM1496.09+1384.01C1478.84+1384.01+1465.22+1391.56+1455.22+1406.65C1445.23+1421.74+1440.23+1442.42+1440.23+1468.68C1440.23+1495.34+1445.23+1516.11+1455.22+1531.01C1465.22+1545.91+1479.23+1553.35+1497.26+1553.35C1533.72+1553.35+1551.95+1525.13+1551.95+1468.68C1551.95+1412.23+1533.33+1384.01+1496.09+1384.01Z"
              strokeLinejoin="round"
              strokeWidth="14.5506"
              stroke="#000000"
            />
            <path
            onClick={() => this.props.onFill(16)}
              stroke="#000000"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill={this.props.fillColours[16]} 
              opacity="0.913149"
              d="M1799.5+1338.15L1799.5+1388.13C1804.98+1368.13+1811.45+1353.43+1818.9+1344.03C1836.15+1322.47+1860.26+1311.69+1891.22+1311.69C1912.78+1311.69+1930.91+1318.64+1945.61+1332.56C1960.31+1346.48+1967.66+1363.63+1967.66+1384.01C1967.66+1400.08+1962.96+1413.31+1953.55+1423.7C1944.14+1434.09+1932.19+1439.28+1917.68+1439.28C1906.71+1439.28+1897.4+1435.75+1889.75+1428.7C1882.11+1421.64+1878.29+1413.02+1878.29+1402.83C1878.29+1397.34+1880.84+1389.69+1885.93+1379.89L1882.4+1379.89C1856.14+1379.89+1838.5+1393.81+1829.48+1421.64C1822.43+1443.99+1818.9+1469.66+1818.9+1498.67L1818.9+1521.01C1818.9+1535.13+1820.08+1544.14+1822.43+1548.06C1824+1550.41+1826.74+1551.59+1830.66+1551.59C1834.19+1551.59+1839.09+1550.81+1845.36+1549.24C1851.63+1547.67+1856.34+1546.89+1859.47+1546.89C1868.1+1546.89+1875.45+1549.92+1881.52+1556C1887.6+1562.08+1890.64+1569.43+1890.64+1578.05C1890.64+1589.42+1886.81+1598.92+1879.17+1606.57C1871.53+1614.21+1862.22+1618.03+1851.24+1618.03C1845.36+1618.03+1834.38+1617.05+1818.31+1615.09C1808.51+1613.92+1796.16+1613.33+1781.27+1613.33C1766.37+1613.33+1753.24+1613.92+1741.87+1615.09C1723.06+1617.05+1711.49+1618.03+1707.18+1618.03C1682.88+1618.03+1670.72+1604.9+1670.72+1578.64C1670.72+1556.69+1680.13+1545.71+1698.95+1545.71C1702.08+1545.71+1705.61+1546.4+1709.53+1547.77C1713.45+1549.14+1716.39+1549.83+1718.35+1549.83C1725.02+1549.83+1728.35+1538.85+1728.35+1516.9L1728.35+1421.64C1728.35+1399.3+1725.02+1388.13+1718.35+1388.13C1716.78+1388.13+1713.75+1388.81+1709.24+1390.18C1704.73+1391.56+1701.3+1392.24+1698.95+1392.24C1680.13+1392.24+1670.72+1381.46+1670.72+1359.9C1670.72+1348.14+1673.86+1338.54+1680.13+1331.09C1686.4+1323.64+1694.44+1319.92+1704.24+1319.92C1708.16+1319.92+1713.65+1320.7+1720.7+1322.27C1727.76+1323.84+1734.42+1324.62+1740.7+1324.62C1745.4+1324.62+1752.26+1323.84+1761.28+1322.27C1770.29+1320.7+1776.96+1319.92+1781.27+1319.92C1793.42+1319.92+1799.5+1325.99+1799.5+1338.15Z"
              strokeWidth="14.5506"
            />
            <path
            onClick={() => this.props.onFill(17)}
              strokeWidth="14.5506"
              strokeLinecap="round"
              opacity="0.913149"
              d="M2097.61+1219.96C2108.59+1219.96+2114.08+1227.21+2114.08+1241.71L2114.08+1519.84C2114.08+1539.44+2118+1549.24+2125.84+1549.24C2128.97+1549.24+2131.72+1548.85+2134.07+1548.06C2136.42+1547.28+2139.56+1546.89+2143.48+1546.89C2160.72+1546.89+2169.35+1557.08+2169.35+1577.46C2169.35+1604.51+2157.59+1618.03+2134.07+1618.03C2133.68+1618.03+2118.78+1616.86+2089.38+1614.51C2080.36+1613.72+2070.76+1613.33+2060.57+1613.33C2051.94+1613.33+2042.73+1613.92+2032.93+1615.09C2016.47+1617.05+2006.08+1618.03+2001.77+1618.03C1991.18+1618.03+1982.56+1614.41+1975.9+1607.16C1969.23+1599.9+1965.9+1590.4+1965.9+1578.64C1965.9+1556.69+1975.5+1545.71+1994.71+1545.71C1997.06+1545.71+2000.3+1546.4+2004.41+1547.77C2008.53+1549.14+2011.76+1549.83+2014.12+1549.83C2020.78+1549.83+2024.11+1538.85+2024.11+1516.9L2024.11+1321.09C2024.11+1299.14+2020.78+1288.17+2014.12+1288.17C2011.37+1288.17+2007.84+1288.95+2003.53+1290.52C2001.18+1291.3+1998.04+1291.69+1994.12+1291.69C1975.31+1291.69+1965.9+1280.91+1965.9+1259.35C1965.9+1247.2+1969.23+1237.6+1975.9+1230.54C1982.56+1223.49+1991.58+1219.96+2002.94+1219.96C2006.08+1219.96+2012.74+1220.55+2022.94+1221.72C2036.26+1223.29+2046.26+1224.07+2052.92+1224.07C2061.94+1224.07+2069.78+1223.29+2076.44+1221.72C2085.46+1220.55+2092.52+1219.96+2097.61+1219.96Z"
              stroke="#000000"
              strokeLinejoin="round"
              fill={this.props.fillColours[17]} 
            />
            <path
            onClick={() => this.props.onFill(18)}
              stroke="#000000"
              strokeLinejoin="round"
              fill={this.props.fillColours[18]} 
              d="M2316.35+1315.8C2346.14+1315.8+2373.58+1327.37+2398.67+1350.49L2398.67+1308.16C2398.67+1294.05+2393.77+1286.99+2383.97+1286.99C2381.62+1286.99+2376.91+1287.38+2369.86+1288.17C2364.76+1289.73+2359.66+1290.52+2354.57+1290.52C2347.12+1290.52+2340.85+1287.38+2335.75+1281.11C2330.66+1274.84+2328.11+1267+2328.11+1257.59C2328.11+1232.5+2341.44+1219.96+2368.09+1219.96C2376.72+1219.96+2382.99+1220.15+2386.91+1220.55C2402.59+1222.11+2413.17+1222.9+2418.66+1222.9C2423.76+1222.9+2431.2+1222.51+2441+1221.72C2450.8+1220.94+2458.06+1220.55+2462.76+1220.55C2472.56+1220.55+2479.32+1222.8+2483.05+1227.31C2486.77+1231.82+2488.63+1240.15+2488.63+1252.3L2488.63+1519.84C2488.63+1539.83+2492.36+1549.83+2499.8+1549.83C2502.16+1549.83+2505.1+1549.24+2508.62+1548.06C2510.98+1547.28+2514.11+1546.89+2518.03+1546.89C2534.89+1546.89+2543.32+1556.88+2543.32+1576.87C2543.32+1589.03+2540.38+1598.92+2534.5+1606.57C2528.62+1614.21+2520.78+1618.03+2510.98+1618.03L2507.45+1618.03L2486.87+1614.51C2482.16+1613.72+2475.5+1613.33+2466.88+1613.33C2456.68+1613.33+2448.26+1613.72+2441.59+1614.51C2431.79+1615.68+2426.5+1616.27+2425.72+1616.27C2413.56+1616.27+2407.49+1609.21+2407.49+1595.1L2407.49+1573.35C2387.1+1608.23+2356.53+1625.68+2315.76+1625.68C2279.7+1625.68+2250+1610.88+2226.68+1581.28C2203.35+1551.69+2191.69+1514.35+2191.69+1469.27C2191.69+1423.41+2203.16+1386.36+2226.09+1358.14C2249.02+1329.91+2279.11+1315.8+2316.35+1315.8ZM2336.93+1389.89C2322.42+1389.89+2310.57+1396.75+2301.35+1410.47C2292.14+1424.19+2286.95+1442.81+2285.77+1466.33C2285.77+1466.33+2285.77+1468.88+2285.77+1473.97C2285.77+1497.89+2290.38+1516.7+2299.59+1530.42C2308.8+1544.14+2321.25+1551+2336.93+1551C2354.18+1551+2368.19+1543.55+2378.97+1528.66C2389.75+1513.76+2395.14+1493.97+2395.14+1469.27C2395.14+1445.36+2389.85+1426.15+2379.26+1411.65C2368.68+1397.14+2354.57+1389.89+2336.93+1389.89Z"
              opacity="0.913149"
              strokeWidth="14.5506"
              strokeLinecap="round"
            />
          </g>
        </g>
      </svg>
    );
  }
}

export default HelloWorld;