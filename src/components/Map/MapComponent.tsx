import { Avatar, Carousel, Divider, Drawer, List, Modal } from "antd";
import { LatLngTuple } from "leaflet";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import ChangeView from "./ChangeView";
import DrawIPC from "./DrawIPC";

const somaliaPos: LatLngTuple = [5.152149, 46.199615];

const MapComponent = ({
  center,
  zoom,
  drawIPC,
  drawMap,
  setSelectedRegion,
  startDate,
  endDate,
}: ControlProps2) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [open, setOpen] = React.useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const contentStyle: React.CSSProperties = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  const data = [
    {
      title: "Somalia and al-Shabab: The struggle to defeat the militants",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
  ];

  return (
    <MapContainer
      center={somaliaPos}
      zoom={5.2}
      zoomControl={false}
      style={{ width: "100%", height: "100% " }}
    >
      {drawIPC && (
        <DrawIPC
          minDate={startDate}
          maxDate={endDate}
          setSelectedRegion={setSelectedRegion}
        />
      )}
      <ChangeView center={center} zoom={zoom} />
      {drawMap && (
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      )}
      <Marker
        position={somaliaPos}
        eventHandlers={{
          click: (i) => showDrawer(),
        }}
      ></Marker>
      {/* <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      > */}
      <Drawer
        // afterChange={onChange}
        title="Relevant articles"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src="https://news.files.bbci.co.uk/ws/img/logos/og/somali.png"
                    shape="square"
                  />
                }
                title={<a href="https://ant.design">{item.title}</a>}
                description={
                  <>
                    <p style={{ margin: 0, padding: 0, color: "#404040" }}>
                      Published on: 20-02-2021
                    </p>
                    <Divider style={{ margin: 0, padding: 0 }} />
                    <p>
                      In an audacious appointment, Somalia's new government has
                      included a former al-Shabab militant, who once fought
                      against the authorities, in the cabinet, but the weekend's
                      deadly hotel siege is a reminder of the tough task ahead
                      for those in power.
                    </p>
                  </>
                }
              />
            </List.Item>
          )}
        />
      </Drawer>
      {/* </Modal> */}
    </MapContainer>
  );
};

export default MapComponent;
