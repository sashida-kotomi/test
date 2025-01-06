import React, { useState } from 'react';
　
function Validation() {
　
    interface FormData {
        sampleText: string;
        sampleSelect: number;
    }
    interface Error {
        message: string | undefined;
        type: string | undefined;
    }
    interface FormErrors extends Record<string, any>{
        sampleText?: Error;
        sampleSelect?: Error;
    }
    interface ValidRecode<T> {
        value?: T;
        message: string;
    }
    interface Valid extends Record<string, any>{
        required? : ValidRecode<undefined>;
        pattern? : ValidRecode<RegExp>;
        oneOf? : ValidRecode<number[]>;
    }
    interface FormValid extends Record<string, any> {
        sampleText: Valid;
    }
    interface SelectIds {
        id: number;
        label: string;
    }
　
    const selectIds: SelectIds[] = [
        {id:1, label: 'a'},
        {id:2, label: 'b'},
        {id:3, label: 'c'},
    ];
　
    // state宣言
    const [formData, setFormData] = useState<FormData>({ sampleText: '', sampleSelect: 1});
　
    const [valid] = useState<FormValid>({
        sampleText: {
            required: { message: 'sampleTextは必須です。'},
            pattern: { value: /^[0-9a-zA-Z]+$/, message: 'sampleTextは半額英数字で入力してください。'},
        },
        sampleSelect: {
            required: { message: 'sampleSelectは必須です。'},
            oneOf: { value: selectIds.map( (row) => row.id), message: 'sampleSelectは指定された値を入れてください。'},
        },
    });
    const [errors, setErrors] = useState<FormErrors>({
        sampleText: {message: undefined, type: undefined},
        sampleSelect: {message: undefined, type: undefined},
    });
　
    const execValid = (name: string, value:any) => {
        setErrors({});
        Object.keys(valid[name]).forEach((type:string) => {
            validByRule(name, type, valid[name][type], value);
        });
    }
　
    const validByRule = (name: string, type: string, valid: ValidRecode<any>, value:any): boolean => {
        // ここを拡張すると自作でバリデーションが作れる。
        const isError = (() => {
            switch(type){
                case 'required':
                    return value === null || value === '';
                case 'pattern':
                    return !value.match(valid.value);
                case 'oneOf':
                    return valid.value.indexOf(Number(value)) === -1;
                default:
                    //本来はthrowする
                    alert('バリデーションに失敗しました。');
                    return true;
            }
        })();
　
        if (isError) {
            let error: FormErrors = {};
            error[name] = {message: valid.message, type: type};
            setErrors({...errors, ...error});
        }
　
        return isError;
    }
　
    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        execValid(name, value);
    };
　
    const handleSubmit = (e:React.SyntheticEvent) => {
        console.log(formData);
        console.log(errors);
        e.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>sampleText: </label>
                <input
                    name="sampleText"
                    value={formData.sampleText}
                    onChange={handleChange}
                />
                <p style={{color: 'red'}}>{errors?.sampleText?.message}</p>
            </div>
            <div>
                <label>sampleSelect: </label>
                <select name="sampleSelect" onChange={handleChange}>
                    {selectIds.map( (row: SelectIds) =>
                        <option key={row.id} value={row.id}>{row.label}</option>
                    )}
                    <option value={4}>d</option>
                </select>
                <p style={{color: 'red'}}>{errors?.sampleSelect?.message}</p>
            </div>
            <button type='submit' disabled={Object.keys(errors).length !== 0}>送信</button>
        </form>
    );
}
　
export default Validation;