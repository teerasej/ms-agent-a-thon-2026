# EX-07: สร้าง Busy Day Guide

พวกเราได้ลองใช้ Agent ที่ Microsoft เตรียมไว้แล้ว ต่อไปเราจะสร้างเพื่อนร่วมทีมคนใหม่ที่มีบทบาท ข้อมูล และขอบเขตการตอบของตัวเอง


> **สิทธิ์ใช้งาน:** Agent Builder, การ Upload embedded Knowledge และการ Create Agent `ต้องตรวจสอบก่อนเริ่มอบรม`

## Scenario: ผู้ช่วยจัดลำดับงานระหว่างวัน

### Practice 1: Describe Agent

#### Steps

ใน Practice นี้ พวกเราจะใช้วิธีบรรยายหน้าที่ของ Agent ด้วยภาษาทั่วไปเพื่อสร้าง การตั้งค่าเริ่มต้นของ Agent

1. เปิด **Microsoft 365 Copilot Chat**
2. เลือก **New agent**
3. Copy ข้อความนี้ไปวางในหน้าห้องแชท และกดส่ง

```text
Create an agent named Busy Day Guide.

The agent helps employees prioritize a busy workday using the supplied working guide.

It should:
- Ask the user about today's tasks
- Return no more than 3 priorities
- Explain briefly why each item matters
- Suggest the first action for each priority
- Use the supplied knowledge as the primary source
- Say when the available information is insufficient
```

4. เปิด **Configure** และตรวจสอบ **Name**, **Description** และ **Instructions**

#### Checkpoint

- Agent มีชื่อและบทบาทชัดเจน
- Instructions กำหนดผลลัพธ์สูงสุดสามลำดับความสำคัญ

### Practice 2: Add Knowledge and Starter Prompts

#### Steps

ใน Practice นี้ พวกเราจะเพิ่มคู่มือเป็น Knowledge และเตรียมคำถามเริ่มต้นให้ผู้ใช้

1. ใน **Knowledge** ให้ Upload [busy-workday-guide.docx](/files/busy-workday-guide.docx)
2. เปิด **Only use specified sources** เพื่อให้ Agent ให้ความสำคัญกับ Source ที่กำหนด
3. เพิ่ม **Starter Prompts** สามรายการ

```text
Plan today
Help me prioritize today's tasks
```

```text
Start first
Which task should I start first?
```

```text
Postpone
What should I postpone until later?
```

#### Checkpoint

- ไฟล์ปรากฏใน Knowledge และ Upload เสร็จสมบูรณ์
- มี Starter Prompts สามรายการ

> **หมายเหตุ:** การตั้งค่า **Only use specified sources** นี้ช่วยให้ Agent ให้ความสำคัญกับ Knowledge ที่กำหนด แต่ไม่ได้เป็นการปิดกั้นให้ Agent ใช้ความรู้พื้นฐานที่มีนะ

### Practice 3: Test and Create

#### Steps

ใน Practice นี้ พวกเราจะทดสอบทั้งงานที่ Agent ควรทำและคำถามที่อยู่นอกขอบเขต ก่อน Create Agent

1. เปิด **Try it** แล้วใช้ Prompt นี้

```text
Today I need to respond to an urgent customer issue, prepare the weekly project update, review a proposal, and organize next month's team activity.

Help me decide what to do first.
```

2. ตรวจสอบว่า Agent ให้ไม่เกินสาม Priority พร้อมเหตุผลและ First action
3. ทดสอบขอบเขตด้วย Prompt นี้

```text
What is our company's travel reimbursement policy?
```

4. หาก Knowledge ไม่มีข้อมูล Agent ควรแจ้งว่าไม่พบข้อมูล
5. เลือก **Create** แล้วเลือก **Go to agent**
6. Pin Agent หากมีตัวเลือก

#### Checkpoint

- Agent ช่วยจัดลำดับงานตามคู่มือ
- Agent แจ้งข้อจำกัดเมื่อไม่มีข้อมูลรองรับ
- `Busy Day Guide` พร้อมใช้งานจาก Copilot

#### Expected Output

Agent ชื่อ `Busy Day Guide` ที่ใช้ Knowledge จัดลำดับงานไม่เกินสามรายการ มี Starter Prompts สามรายการ และบอกได้เมื่อข้อมูลไม่เพียงพอ

> **Fallback:** หากบัญชีไม่มี Agent Builder สังเกตการณ์ตามการสาธิตของวิทยากร แล้วช่วยกันตรวจ Name, Instructions, Knowledge, Starter Prompts และผลการทดสอบจาก Agent ที่เตรียมไว้

[← EX-06: Analyst](/02-get-started-with-agents/ex-06-analyst) | [EX-08: Focus Time Campaign Kit →](./ex-08-focus-time-campaign-kit)
