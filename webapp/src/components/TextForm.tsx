import { Button, Checkbox, Col, Form, Input, InputProps, Row } from "antd";

import { TextFormValues } from '../interfaces';

export interface ITextFormProps {
  className?: string;
  isLoading?: boolean;
  size?: InputProps["size"];
  onSubmit(values: TextFormValues): void;
}

export function TextForm({ size, className, onSubmit, isLoading }: ITextFormProps) {
  return (
    <Form disabled={isLoading} layout="vertical" onFinish={onSubmit} className={className}>
      <Form.Item label="Text" name="text" rules={[{ required: true }]}>
        <Input.TextArea
          autoSize
          placeholder="Type your text here..."
          size={size}
        />
      </Form.Item>

      <Row>
        <Col span={12}>
          <Button htmlType="submit">Submit</Button>
        </Col>
        <Col span={12} className="text-right">
          <Form.Item name="countUnknown" valuePropName="checked" noStyle>
            <Checkbox>Count unknown</Checkbox>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
