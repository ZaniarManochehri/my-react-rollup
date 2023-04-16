import React, {FC} from "react";

type Props = {
    label: string;
}

export const ZMButton: FC<Props> = ({label}) => {
    return <button disabled>{label}</button>
}