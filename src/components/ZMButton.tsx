import React, {FC} from "react";

type Props = {
    label: string;
}

const ZMButton: FC<Props> = ({label}) => {
    return <button>{label}</button>
}

export default ZMButton;