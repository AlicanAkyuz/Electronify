import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getGenres,
         getFractionNumbers,
         getBpmOptions,
         getKeyOptions,
         getLoudnessOptions,
         getModeOptions
       } from './dialog_functions';

const styles = dialogTheme => ({
  popUpTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: '1.8vw',
    color: '#C1CDC1'
  },
  dialogContent: {
    textAlign: 'center',
    backgroundColor:'#0c0c0c',
    paddingTop: '10%',
  },
  formControl: {
    width: '70%',
    minWidth: '50%',
    backgroundColor: '#CFDBC5',
    borderRadius: '5px'
  }
});

function DialogBox(props) {
  const { classes } = props;
  let titleText;
  let menuItems;

  if (props.activeStep === 0) {
    titleText = props.genreTitle;
    menuItems =
    <Select native onChange={(event) => {props.handleGenreSelection(event.target.value)}} input={<Input />} >
      <option value="" />
      {getGenres().map(e => <option key={shortid.generate()} value={e}>{e}</option>)}
    </Select>
  };

  if (props.activeStep === 1) {
    titleText = props.danceabilityTitle;
    menuItems =
    <Select native onChange={(event) => {props.handleDanceabilitySelection(event.target.value)}} input={<Input />} >
      <option value="" />
      {getFractionNumbers().map(e => <option key={shortid.generate()} value={e}>{e}</option>)}
    </Select>
  };

  if (props.activeStep === 2) {
    titleText = props.energyTitle;
    menuItems =
    <Select native onChange={(event) => {props.handleEnergySelection(event.target.value)}} input={<Input />} >
      <option value="" />
      {getFractionNumbers().map(e => <option key={shortid.generate()} value={e}>{e}</option>)}
    </Select>
  };

  if (props.activeStep === 3) {
    titleText = props.keyTitle;
    menuItems =
    <Select native onChange={(event) => {props.handleKeySelection(event.target.value)}} input={<Input />} >
      <option value="" />
      {getKeyOptions().map(e => <option key={shortid.generate()} value={e}>{e}</option>)}
    </Select>
  };

  if (props.activeStep === 4) {
    titleText = props.loudnessTitle;
    menuItems =
    <Select native onChange={(event) => {props.handleLoudnessSelection(event.target.value)}} input={<Input />} >
      <option value="" />
      {getLoudnessOptions().map(e => <option key={shortid.generate()} value={e}>{e}</option>)}
    </Select>
  };

  if (props.activeStep === 5) {
    titleText = props.modeTitle;
    menuItems =
    <Select native onChange={(event) => {props.handleModeSelection(event.target.value)}} input={<Input />} >
      <option value="" />
      {getModeOptions().map(e => <option key={shortid.generate()} value={e}>{e}</option>)}
    </Select>
  };

  if (props.activeStep === 6) {
    titleText = props.tempoTitle;
    menuItems =
    <Select native onChange={(event) => {props.handleTempoSelection(event.target.value)}} input={<Input />} >
      <option value="" />
      {getBpmOptions().map(e => <option key={shortid.generate()} value={e}>{e}</option>)}
    </Select>
  };

  if (props.activeStep === 7) {
    titleText = props.positivenessTitle;
    menuItems =
    <Select native onChange={(event) => {props.handlePositivenessSelection(event.target.value)}} input={<Input />} >
      <option value="" />
      {getFractionNumbers().map(e => <option key={shortid.generate()} value={e}>{e}</option>)}
    </Select>
  };

  return (
    <Dialog style={{minWidth: '80%'}} open={props.dialogOpen}>
      <DialogTitle style={{backgroundColor: '#191919'}}>
        <p className={classes.popUpTitle}>{titleText}</p>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <FormControl onChange={() => {props.handleDialogClose()}} className={classes.formControl}>
          {menuItems}
        </FormControl>
      </DialogContent>
    </Dialog>
  );
}

DialogBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DialogBox);
