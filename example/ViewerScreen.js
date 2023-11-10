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
      // const xfdf = '<?xml version="1.0" encoding="UTF-8"?>\n<xfdf xmlns="http://ns.adobe.com/xfdf/" xml:space="preserve">\n\t<annots>\n\t\t<circle style="solid" width="5" color="#E44234" opacity="1" creationdate="D:20190729202215Z" flags="print" date="D:20190729202215Z" page="0" rect="138.824,653.226,236.28,725.159" title="" />\n\t\t<circle style="solid" width="5" color="#E44234" opacity="1" creationdate="D:20190729202215Z" flags="print" date="D:20190729202215Z" page="0" rect="103.114,501.958,245.067,590.92" title="" />\n\t\t<circle style="solid" width="5" color="#E44234" opacity="1" creationdate="D:20190729202216Z" flags="print" date="D:20190729202216Z" page="0" rect="117.85,336.548,328.935,451.568" title="" />\n\t\t<freetext TextColor="#363636" style="solid" width="0" opacity="1" creationdate="D:20190729202455Z" flags="print" date="D:20190729202513Z" page="0" rect="320.774,646.323,550.446,716.498" title="">\n\t\t\t<defaultstyle>font: Roboto 24pt;color: #363636</defaultstyle>\n\t\t\t<defaultappearance> 1 1 1 RG 1 1 1 rg /F0 24 Tf </defaultappearance>\n\t\t\t<contents>HELLO PDFTRON!!!</contents>\n\t\t\t<apref y="716.498" x="320.774" gennum="0" objnum="404" />\n\t\t</freetext>\n\t\t<line style="solid" width="5" color="#E44234" opacity="1" creationdate="D:20190729202507Z" flags="print" start="278.209,212.495" end="214.177,411.627" head="None" tail="OpenArrow" date="D:20190729202507Z" page="0" rect="206.039,211.73,280.589,416.387" title="" />\n\t</annots>\n\t<pages>\n\t\t<defmtx matrix="1.333333,0.000000,0.000000,-1.333333,0.000000,1056.000000" />\n\t</pages>\n\t<pdf-info version="2" xmlns="http://www.pdftron.com/pdfinfo" />\n</xfdf>';
      const xfdf = `<?xml version="1.0" encoding="UTF-8"?><xfdf xmlns="http://ns.adobe.com/xfdf/"  xml:space="preserve">
      <modify><freetext xmlns="http://ns.adobe.com/xfdf/" TextColor="#000000" style="solid" width="0" creationdate="D:20231106085642Z" flags="print" date="D:20231106085642Z" name="2D663BBA-4C19-4F49-B776-3C3E763CA7C1" page="0" justification="left" rect="290.7604,431.7359,460.4308,441.3663" title="ditk+001@luminpdf.com" subject="Free text">
          <defaultstyle>color:#000000;font:Helvetica 8pt;font-style:normal;font-weight:normal;text-align:left;text-vertical-align:top;</defaultstyle>
          <trn-custom-data bytes="{&quot;PTSpacingTextKern&quot;:&quot;0&quot;,&quot;trn-unrotated-rect&quot;:&quot;290.760406,431.735901,460.430786,422.105499&quot;}"/>
          <contents-richtext> <body xmlns="http://www.w3.org/1999/xtml" xmlns:xfa="http://www.xfa.org/schema/xfa-data/1.0/" xfa:contentType="text/html" xfa:APIVersion="PDFTron:0.0.0" xfa:spec="2.0"><span style="color:#000000; font-family:HiraginoSans-W3; text-align:left; text-valign:top; font-weight:normal; font-style:normal; font-size:8.000000pt">大学の友人で親しい。　ピンクのものが好き。</span></body></contents-richtext>
          <defaultappearance> 1 1 1 RG 1 1 1 rg /Helvetica 8 Tf </defaultappearance>
          <contents>大学の友人で親しい。　ピンクのものが好き。</contents>
          <apref y="441.3663" x="290.7604" gennum="0" objnum="259"/>
          
        </freetext></modify>
      <modify/>
      <delete/>
      <pdf-info xmlns="http://www.pdftron.com/pdfinfo" import-version="4" version="2"/>
    </xfdf>`;
      _viewerRef.current?.importAnnotationCommand(xfdf);
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
    // console.log('action', action);
    // console.log('xfdfCommand', xfdfCommand);
  };

  const setStampImageData = ({annotationId, pageNumber, stampImageDataUrl}) => {
    (annotationID = '75911d3a-f1fa-7a4f-8137-5885e3a4c4ae'),
      (pageNumber = 1),
      (stampImageData =
        'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
  };

  // const path =
  //   Platform.OS === 'android'
  //     ? 'android.resource://com.example/raw/sample_200mb.pdf'
  //     : '200mb';
  const path = "https://pdftron.s3.amazonaws.com/downloads/pl/PDFTRON_about.pdf";

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
      currentUser={'ditk+001@luminpdf.com'}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
