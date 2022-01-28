import React from 'react';

// const StarTrio = ({fillColours, onFillColour}) =>  {
    
//         return (
//           <svg width="300px" xmlns="http://www.w3.org/2000/svg" height="300px" viewBox="0 0 3370.82 2384.24">
//             <g>
//               <path  onClick={() => onFillColour(0)} fill={fillColours[0]} strokeWidth="79.9569" opacity="1" d="M869.331+1834.03L966.635+1262.28L550.805+857.994L1124.64+773.855L1380.64+253.445L1637.99+773.193L2212.04+855.852L1797.25+1261.21L1896.03+1832.71L1382.33+1563.49L869.331+1834.03Z" strokeLinejoin="round" strokeLinecap="round" stroke="#000000" />
//               <path  onClick={() => onFillColour(1)} fill={fillColours[1]}  strokeLinejoin="round" strokeWidth="79.9569" stroke="#000000" opacity="1" strokeLinecap="round" d="M2361.41+1678.6L2433.41+1417.59L2259.21+1210.31L2529.7+1198.13L2673.01+968.404L2768.18+1221.89L3030.94+1287.19L2819.27+1456.03L2838.36+1726.12L2612.38+1576.99L2361.41+1678.6Z"/>
//               <path  onClick={() => onFillColour(2)} fill={fillColours[2]} d="M2187.95+650.688L2308.79+497.065L2250.75+310.422L2434.2+377.883L2593.78+265.008L2586.3+460.324L2742.97+577.207L2554.9+630.458L2492.15+815.571L2383.39+653.165L2187.95+650.688Z" strokeLinecap="round" strokeWidth="79.9569" strokeLinejoin="round" stroke="#000000" opacity="1"/>
//             </g>
//           </svg>
//         )
//     }


// export default StarTrio; 

// Old way to build componen

class StarTrio extends React.Component {
    render () {
        return (
          <svg width="380px" xmlns="http://www.w3.org/2000/svg" height="380px" viewBox="0 0 3370.82 2384.24">
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
            <g>
              <path  onClick={() => this.props.onFill(26)} fill={this.props.fillColours[26]} fillRule="evenodd" strokeWidth="79.9569" opacity="1" d="M869.331+1834.03L966.635+1262.28L550.805+857.994L1124.64+773.855L1380.64+253.445L1637.99+773.193L2212.04+855.852L1797.25+1261.21L1896.03+1832.71L1382.33+1563.49L869.331+1834.03Z" strokeLinejoin="round" strokeLinecap="round" stroke="#000000" />
              <path  onClick={() => this.props.onFill(27)} fill={this.props.fillColours[27]} fillRule="evenodd" strokeLinejoin="round" strokeWidth="79.9569" stroke="#000000" opacity="1" strokeLinecap="round" d="M2361.41+1678.6L2433.41+1417.59L2259.21+1210.31L2529.7+1198.13L2673.01+968.404L2768.18+1221.89L3030.94+1287.19L2819.27+1456.03L2838.36+1726.12L2612.38+1576.99L2361.41+1678.6Z"/>
              <path  onClick={() => this.props.onFill(28)} fill={this.props.fillColours[28]} fillRule="evenodd" d="M2187.95+650.688L2308.79+497.065L2250.75+310.422L2434.2+377.883L2593.78+265.008L2586.3+460.324L2742.97+577.207L2554.9+630.458L2492.15+815.571L2383.39+653.165L2187.95+650.688Z" strokeLinecap="round" strokeWidth="79.9569" strokeLinejoin="round" stroke="#000000" opacity="1"/>
              <path  onClick={() => this.props.onFill(28)} fill={this.props.fillColours[28]} fillRule="evenodd" d="M2187.95+650.688L2308.79+497.065L2250.75+310.422L2434.2+377.883L2593.78+265.008L2586.3+460.324L2742.97+577.207L2554.9+630.458L2492.15+815.571L2383.39+653.165L2187.95+650.688Z" strokeLinecap="round" strokeWidth="79.9569" strokeLinejoin="round" stroke="#000000" opacity="1"/>
            </g>
          </svg>
        )
    }
}

export default StarTrio; 