import React, { useState, useEffect, useContext } from "react";
import { SequenceContext } from "../sequences/SequenceProvider";
import "./Matrix.css"

export const MatrixGenerator = ({ presetObj, setPreset }) => {
  const { sequences, getSequences } = useContext(SequenceContext);
  const [HHSequence, setHHSequence] = useState({})
  const [SDSequence, setSDSequence] = useState({})
  const [BDSequence, setBDSequence] = useState({})

  useEffect(() => {
    const presetSequences = presetObj.sequences.filter(
      (sequence) => sequence.presetId === presetObj.id
    ) || { pattern: [] };
    setHHSequence(presetSequences[0]);
    setSDSequence(presetSequences[1]);
    setBDSequence(presetSequences[2]);
  }, [sequences]);

  useEffect(() => {
    getSequences();
  }, []);

  const togglePad = (event) => {
    if (event.target.id.startsWith("hh")) {
      const [,hhPad] = event.target.id.split("--")
      const HHSequenceCopy = {...HHSequence}
      const togglePad = HHSequenceCopy.pattern[hhPad] === 1 ? 0 : 1
      HHSequenceCopy.pattern.splice(parseInt(hhPad), 1, togglePad)
      setHHSequence(HHSequenceCopy)
      const presetObjCopy = {...presetObj}
      presetObjCopy.sequences[0] = HHSequenceCopy
      setPreset(presetObjCopy)
    }
    if (event.target.id.startsWith("sd")) {
      const [,sdPad] = event.target.id.split("--")
      const SDSequenceCopy = {...SDSequence}
      const togglePad = SDSequenceCopy.pattern[sdPad] === 1 ? 0 : 1
      SDSequenceCopy.pattern.splice(parseInt(sdPad), 1, togglePad)
      setSDSequence(SDSequenceCopy)
      const presetObjCopy = {...presetObj}
      presetObjCopy.sequences[1] = SDSequenceCopy
      setPreset(presetObjCopy)  
    }
    if (event.target.id.startsWith("bd")) {
      const [,bdPad] = event.target.id.split("--")
      const BDSequenceCopy = {...BDSequence}
      const togglePad = BDSequenceCopy.pattern[bdPad] === 1 ? 0 : 1
      BDSequenceCopy.pattern.splice(parseInt(bdPad), 1, togglePad)
      setBDSequence(BDSequenceCopy)
      const presetObjCopy = {...presetObj}
      presetObjCopy.sequences[2] = BDSequenceCopy
      setPreset(presetObjCopy)   
    }
  }


  const Matrix = ({ selectedPreset }) => {
    const sequences = selectedPreset.sequences;

    let jsx = [];

    for (let i = 0; i < 16; i++) {
      jsx.push(
        <div className="pad-column" id={`column--${i}`}>
          {sequences.map((sequence) => {
            return (
              <div
                onClick={togglePad}
                id={`${sequence.inst}--${i}`}
                className={`${'pad'} ${sequence.pattern[i] ? "active" : ""}`}
              ></div>
            );
          })}
        </div>
      );
    }
    return <div class="drums">{jsx}</div>
  };

  return (
    <>
        <Matrix selectedPreset={presetObj} />    
    </>
  );
};