import './EEGcircuit.css'
import React from 'react';
import {useLocation, withRouter} from 'react-router-dom';
import {Link} from 'react-scroll';
import { Routes } from '../../routes';
import { useEffect } from 'react';
import styled from 'styled-components'
import { useTable } from 'react-table'


export const EEGcircuitPage = withRouter((props) =>{
 
    const p300='./images/P300speller.png';
    const EEGschematic='./images/EEG-schematic.png';
    const EEGprototype='./images/EEGprotoype-img.png';
    const EEGtests='./images/EEGtests.png';
    const EEGbefore='./images/EEGbefore.png';
    const EEGafter='./images/EEGafter.png';

    const handleSideNavClick = (projectRoute:Routes) =>{
        props.history.push(projectRoute);
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

// Build Table
    const Styles = styled.div`
    padding: 1rem;

    table {
    border-spacing: 0;
    border: 3px solid rgb(182, 202, 223);
    width: 60%;
    font-size: 0.9vw;
    

    tr {  
        :last-child {
        td {
            border-bottom: 0;
        }
        }
    }

    th {
        background-color: rgb(182, 202, 223, 80%);
        border-bottom: 3px solid rgb(182, 202, 223);
        border-right: 3px solid rgb(182, 202, 223);
        height: 1.5vw;
        font-size: 1vw;
        
        :last-child{
            border-right: 0;
        }

    }
    td {
        margin: 0;
        padding: 0.5rem;
        border-bottom: 2px solid rgb(182, 202, 223);
        border-right: 2px solid rgb(182, 202, 223);

        :first-child {
            background-color: rgb(211, 211, 211, 50%);
        }

        :last-child {
        border-right: 0;
        }
    }
    }
    `

    const data = React.useMemo(() => [
          { col1: 'Gain',
            col2: '2420',
            col3: '2420',
            col4: '1278',
          },
          { col1: 'Noise',
            col2: '475 nVrms',
            col3: '345 nVrms at 100Hz',
            col4: '31.3 uV at 10Hz',
          },
          { col1: 'Input Voltage Range',
            col2: '+/- 250 μV',
            col3: '+/- 250 μV',
            col4: '+/- 0.5 mV',
          },
          { col1: 'High Pass Filter -3 dB',
            col2: '0.1 Hz',
            col3: '0.107 Hz',
            col4: '1.5 Hz',
          },
          { col1: 'Low Pass Filter -3 dB',
            col2: '50 Hz',
            col3: '46.634 Hz',
            col4: '160 Hz',
          },
          { col1: 'Input Offset Range',
            col2: '+/- 150 mV',
            col3: '+/- 150 mV',
            col4: '+/- 0.5mV',
          },
          { col1: 'Power Consumption',
            col2: '> 14.25 mW',
            col3: '61.53 mW',
            col4: '60 mW',
          },
          { col1: 'CMRR (dB)',
            col2: '> 60 dB',
            col3: '95.93 dB',
            col4: '92 dB',
          },
          { col1: 'Input Impedance',
            col2: '> 10 MΩ',
            col3: '10,000 MΩ',
            col4: 'N/A',
          },
          { col1: 'Leakage Current',
            col2: '<1 μA',
            col3: '1.92 nA',
            col4: '0.1 μV',
          },
          { col1: 'Distortion',
            col2: '< 1%>',
            col3: '0.125%',
            col4: 'N/A',
          },
        ],
        []
      )

    const columns = React.useMemo(
    () => [
        { Header: 'Specification',
          accessor: 'col1', // accessor is the "key" in the data
        },
        { Header: 'Design Value',
          accessor: 'col2',
        },
        { Header: 'Simulation Result',
          accessor: 'col3',
        },
        { Header: 'Measured Result',
          accessor: 'col4',
        }
    ],
    []
    )

    function Table({columns:[], data:[]}) {

        const defaultColumn = React.useMemo( () => ({
            width: 150,
        }), 
        [])

        const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    // @ts-ignore
      } = useTable({ columns, data, defaultColumn })

      return (
        <table {...getTableProps()}>
        <thead>
            {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                <th
                    {...column.getHeaderProps()}
                >
                    {column.render('Header')}
                </th>
                ))}
            </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map(row => {
            prepareRow(row)
            return (
                <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                    return (
                    <td
                        {...cell.getCellProps()}
                    >
                        {cell.render('Cell')}
                    </td>
                    )
                })}
                </tr>
            )
            })}
        </tbody>
        </table>
      )

    }

    
    


    return (
        <div className="EEG-div" id="EEG">
            <div className="EEGheader-block-div">
                <div>
                    <h2 className="CADproject-title-sm">Bio-Amplifiers & Implant Devices:</h2> 
                    <h2 className="CADproject-title">EEG Signal Processor</h2>
                </div>
            </div>
            <div className="general-format">
                <h3 className="EEGsubheader">Background</h3>
                <div className="CADintro-div">
                    <div className="CADintro-content">
                        
                        <p className="CADintro-text">This project explores the design and assembly of a functional 2-channel scalp EEG signal processing system. <b>I collaborated with a fellow student to design a circuit that successfully filtered and amplified neural signals gathered from a 2-channel scalp EEG system. </b> The EEG system is designed to be used with P300 speller, a brain computer interface (BCI) that allows people to “type” with their thoughts. P300 Spellers are commonly used to help patients with Amyotrophic Lateral Sclerosis (ALS) communicate. </p>
                        <p className="CADintro-text">The final circuit was designed and tested on Altium PCB designer. After optimizing for manufacturing cost, we assembled and tested the system on a 2-layer printed circuit board. <b>Our final product was one of two within the class to successfully detect neurological signals. </b></p>
                    </div>
                    <div className="CADintro-img-div">
                        <img className="EEGintro-img" src={p300}></img>
                        <p className="CADimg_description">P300 Speller interface. EEG signals are processed to help patients with ALS communicate. </p>
                    </div>
                </div>
                <div className="EEG-designReqs">
                    <h3 className="EEGsubheader">Design Process</h3>
                    
                    <h4 className="EEGsubheader2">System Requirements</h4>
                    <div className="DesignProcess-div">
                        <ul className="EEG-designReqs-list">
                            <li>Noise: &lt; 2 μV RMS total noise in band from 0.1 Hz to 50 Hz</li>
                            <li>Bandwidth: 0.1 Hz to 50 Hz</li>
                            <li>Input Voltage Range: At least +/- 250 μV or 500 μV peak to peak</li>
                            <li>Gain: Determined optimal gain of ~1500</li>
                            <li>Input Offset Range: +/- 150 mV without saturating</li>
                            <li>Power Consumption: &lt; 5 mA</li>
                            <li>Power Source: One 3V CR123A battery</li>
                            <li>Distortion: &lt; 1%</li>
                            <li>Safety: No potential for leakage currents into the subject &gt; 1 μA</li>
                            <li>Size: PCB as small as reasonably possible, ideally &lt; 5 cm x 10 cm</li>
                            <li>Ease of Manufacturing: 2-layer, within guidelines of the Advanced Circuits $33 each or $66 each special</li>
                            <li>Cost: &lt; $50 per unit (based on a volume of 100 units), excluding data acquisition system</li>
                        </ul>
                        <div className="CircuitDesign-div">
                            <h4 className="EEGsubheader2">Circuit Design</h4>
                            <p className="CADintro-text">I used Altium PCB designer to design a 2 EEGs channels (VSIN2, VSIN2) that had a shared reference channel (Vref) and a right leg drive (VRLD).</p>
                            <img className="EEGschematic-img" src={EEGschematic}></img>
                            <p className="CADimg_description">Final circuit design constructed and simulated on Altium PCB Designer. </p>
                            <p className="CADintro-text">Biological signals are often small and buried and noise. Processing them requires careful filtering and amplification. A high gain is needed in order to derive anything from the minute signal but you run into the risk of saturation due to the high levels of noise. I chose to use a high pass filter to eliminate low frequency and the DC offset before applying a large gain with a differential amplifier. I applied a preliminary gain before filtering to reduce the noise and saturation that could develop from applying a large gain all in one step and to ensure a high input impedance is preserved for the differential amplification stage. I included one active low pass filter at the output of the differential amplifier to ensure only the desired biological signals are passed on to the P300 Speller. The output of each line is connected to a unity gain buffer amplifier in order to have low output impedance. This helps the circuit connect to other components. </p>
                        </div>
                        <div className="CircuitBuild-div">
                            <h4 className="EEGsubheader2">Assembling and Testing a Prototype</h4>
                            <img className="CBheader-img" src={EEGprototype}></img>
                            <p className="CADintro-text"></p>
                        </div>
                    </div>
                    <div className="FinalDesign-div">
                        <h3 className="EEGsubheader">Results</h3>
                        <div className="EEGtestImg-div">
                            <img className="EEGtestImg" src={EEGbefore}></img>
                            <img className="EEGtestImg" src={EEGafter}></img>
                        </div>
                        <p className="CADintro-text"> </p> 

            {/* TABLE */}
                    <div className="table-div">
                        <Styles>
                            <Table columns={columns} data={data} />
                        </Styles>
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
});