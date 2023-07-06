import React, {Component, useMemo, useRef} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  BackHandler,
  Alert,
} from 'react-native';

import {DocumentView, RNPdftron, Config} from 'react-native-pdftron';
import {NavigationContainer} from '@react-navigation/native';

export default ViewScreen = ({navigation}) => {
  const _viewerRef = useRef(null);

  const onLeadingNavButtonPressed = () => {
    console.log('leading nav button pressed');
    if (_viewerRef.current) {
      _viewerRef.current
        ?.setStampImageData()
        .then((annotationId, pageNumber, stampImageDataUrl) => {
          (annotationID = '75911d3a-f1fa-7a4f-8137-5885e3a4c4ae'),
            (pageNumber = 1),
            (stampImageData =
              'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
        });
    }

    if (Platform.OS === 'ios') {
      Alert.alert(
        'App',
        'onLeadingNavButtonPressed',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: true},
      );
    } else {
      BackHandler.exitApp();
    }
  };

  const onDocumentLoaded = () => {
    if (_viewerRef.current) {
      const xfdf = `<xfdf xmlns="http://ns.adobe.com/xfdf/" xml:space="preserve"><fields><field name="form1[0].#subform[0].USCISOnlineAcctNumber[0]"><value>11111111</value></field></fields><add></add><modify></modify><delete></delete></xfdf>`;
      _viewerRef.current?.importAnnotations(xfdf);
    }
  };

  const onAnnotationChanged = ({action, annotations}) => {
    // console.log('action', action);
    // console.log('annotations', annotations);
    // if (this._viewer) {
    //   this._viewer.exportAnnotations({annotList: annotations}).then((xfdf) => {
    //     console.log('xfdf for annotations', xfdf);
    //   });
    // }
  };

  const onZoomChanged = ({zoom}) => {
    // console.log('zoom', zoom);
  };

  const onExportAnnotationCommand = ({action, xfdfCommand}) => {
    console.log('action', action);
    console.log('xfdfCommand', xfdfCommand);
  };

  const setStampImageData = ({annotationId, pageNumber, stampImageDataUrl}) => {
    (annotationID = '75911d3a-f1fa-7a4f-8137-5885e3a4c4ae'),
      (pageNumber = 1),
      (stampImageData =
        'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
  };

  const path = (Platform.OS === 'ios') ? 'form' : "android.resource://com.example/raw/form.pdf";;
  // const path = 'OoPdfFormExample';
  // const path = "https://pdftron.s3.amazonaws.com/downloads/pl/PDFTRON_about.pdf";

  const myToolbar = {
    [Config.CustomToolbarKey.Id]: 'myToolbar',
    [Config.CustomToolbarKey.Name]: 'myToolbar',
    [Config.CustomToolbarKey.Icon]: Config.ToolbarIcons.FillAndSign,
    [Config.CustomToolbarKey.Items]: [
      Config.Tools.annotationCreateArrow,
      Config.Tools.annotationCreateCallout,
      Config.Buttons.undo,
    ],
  };

  return (
    <DocumentView
      ref={_viewerRef}
      // hideDefaultAnnotationToolbars={[Config.DefaultToolbars.Annotate]}
      // annotationToolbars={[Config.DefaultToolbars.Annotate, myToolbar]}
      hideAnnotationToolbarSwitcher={false}
      hideTopToolbars={false}
      hideTopAppNavBar={false}
      document={path}
      padStatusBar={true}
      showLeadingNavButton={true}
      leadingNavButtonIcon={
        Platform.OS === 'ios'
          ? 'ic_close_black_24px.png'
          : 'ic_arrow_back_white_24dp'
      }
      onLeadingNavButtonPressed={onLeadingNavButtonPressed}
      onDocumentLoaded={onDocumentLoaded}
      onAnnotationChanged={onAnnotationChanged}
      onExportAnnotationCommand={onExportAnnotationCommand}
      onZoomChanged={onZoomChanged}
      readOnly={false}
      disabledElements={[Config.Buttons.userBookmarkListButton]}
      disabledTools={[
        Config.Tools.annotationCreateLine,
        Config.Tools.annotationCreateRectangle,
      ]}
      fitMode={Config.FitMode.FitPage}
      layoutMode={Config.LayoutMode.Continuous}
      setStampImageData={setStampImageData}
      openOutlineList={true}
      collabEnabled={true}
      currentUser={'test'}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
