import React from "react";
import Entry from "./Entry/Entry";
import useStyles from "./styles";

function Entries() {
    const classes = useStyles();
    return (
        <>
        <Entry />
        <Entry />
        </>
    );
};

export default Entries;