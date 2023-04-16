import React, {FC} from "react";

type Props = {
    label: string;
}

const ZMButton: FC<Props> = ({label}) => {
    return <button disabled>{label}</button>
}