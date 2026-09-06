# EX-04: ให้ Researcher ตรวจทานและเปรียบเทียบมุมมอง

ก่อนนำข้อมูลไปตัดสินใจ เราอาจต้องการให้ AI ช่วยตรวจร่างที่มีอยู่ หรือขอให้หลาย Model วิเคราะห์คำถามเดียวกัน ใน Exercise นี้ พวกเราจะทดลองสอง Use case ของ Researcher ได้แก่ **Critique** สำหรับตรวจและปรับปรุง Draft และ **Model Council** สำหรับเปรียบเทียบหลายมุมมอง

> **สิทธิ์ใช้งาน:** Researcher, Critique, Model Council, Frontier program และการอนุญาต Anthropic models จากผู้ดูแลระบบ `ต้องตรวจสอบก่อนเริ่มอบรม` ชื่อเมนูและตัวเลือกอาจแตกต่างกันตามสิทธิ์และการเปิดใช้งานขององค์กร

## Scenario 1: ตรวจร่างข้อเสนอ Hybrid Work ด้วย Critique

### Practice 1: ค้นหาจุดอ่อนและปรับปรุง Draft

ใน Practice นี้ พวกเราจะให้ Critique ตรวจร่างข้อเสนอที่มีข้อสรุปกว้างเกินหลักฐาน แล้วสังเกต Claim ที่ยังไม่รองรับ ความเสี่ยงที่ขาดหาย และ Citation ที่ควรเพิ่ม

#### Steps

1. เปิด **Microsoft 365 Copilot**
2. หากไม่เห็น Researcher ให้เปิด **More Agents** จากเมนูด้านซ้าย
3. เลือก **Researcher** ใต้ **Agents** และเริ่ม Conversation ใหม่
4. หากมีตัวเลือก Model ให้เลือก **Critique**
5. Copy Prompt ด้านล่างไปวาง

```text
Review the draft proposal below before it is sent to leadership.

Draft proposal:
"Our team should move to a hybrid-work policy that requires everyone to work in the office every Tuesday and Thursday. This will improve collaboration, increase productivity, and reduce employee turnover. The policy should begin next month and apply to every role without exception."

Critique the draft in these areas:
- Claims that need evidence
- Missing stakeholder or role considerations
- Operational risks and assumptions
- Statements that need citations

Use credible sources and cite them. Clearly separate supported findings from assumptions.
Then provide a revised recommendation of no more than 180 words. Do not invent company data or claim that the policy will guarantee a result.
```

6. หาก Researcher ถามคำถามเพิ่มเติม ให้ตอบว่าเป็นทีมทั่วไปที่ยังไม่มีข้อมูลภายในเกี่ยวกับ Productivity, Turnover หรือข้อจำกัดของแต่ละ Role
7. เมื่อผลลัพธ์พร้อม ให้เปรียบเทียบ Critique กับ Draft เดิม

#### Checkpoint

ระบุให้ได้อย่างละหนึ่งรายการ:

- Claim ที่ยังไม่มีหลักฐานรองรับ
- Stakeholder, Role หรือความเสี่ยงที่ Draft เดิมไม่ได้กล่าวถึง
- Citation หรือหลักฐานที่ควรเพิ่ม
- ข้อเสนอที่ถูกปรับให้ระมัดระวังหรือทดลองได้จริงมากขึ้น

#### Expected Output

ผลการตรวจที่แยก Claim, ข้อมูลที่ขาด, ความเสี่ยง และ Citation ออกจากกัน พร้อม Revised recommendation ที่ไม่รับรองผลลัพธ์เกินหลักฐาน

> **Fallback:** หากบัญชีไม่มี Critique ให้ใช้ผลลัพธ์ตัวอย่างจากวิทยากรสำหรับ Prompt เดียวกัน แล้วทำ Checkpoint โดยเปรียบเทียบผลลัพธ์กับ Draft ต้นฉบับ

## Scenario 2: เปรียบเทียบวิธีลด Meeting overload ด้วย Model Council

### Practice 2: ตรวจ Agreement, Disagreement และ Unique contribution

ใน Practice นี้ พวกเราจะให้หลาย Model วิเคราะห์คำถามเดียวกัน แล้วตรวจสอบจุดที่เห็นตรงกัน จุดที่เห็นต่าง และมุมมองที่มีเพียง Model ใด Model หนึ่งเสนอ

#### Steps

1. เริ่ม Conversation ใหม่ใน **Researcher**
2. หากมีตัวเลือก Model ให้เลือก **Model Council**
3. Copy Prompt ด้านล่างไปวาง

```text
ทีมของเราต้องการทดลองลด meeting overload เป็นเวลา 2 สัปดาห์ โดยกำลังเลือกระหว่าง:

A. กำหนดช่วงครึ่งวันที่ไม่มีการประชุมสัปดาห์ละ 1 ครั้ง
B. ปรับการประชุม 30 และ 60 นาทีให้เหลือ 25 และ 50 นาที

เปรียบเทียบทั้งสองทางเลือกในเรื่อง focus time, coordination risk และ ease of adoption
สำหรับแต่ละทางเลือก ให้ระบุข้อดี ข้อจำกัด และสิ่งที่ยังไม่แน่นอน

แนะนำหนึ่งทางเลือกสำหรับการทดลอง 2 สัปดาห์ พร้อมอธิบายเหตุผลและวิธีวัดผล
อ้างอิงที่มาของข้อมูลที่ใช้ตัดสินใจ แยกข้อเท็จจริงออกจากข้อสันนิษฐาน และสรุปไม่เกิน 180 คำ
```

4. หาก Researcher ถามคำถามเพิ่มเติม ให้ตอบโดยไม่สร้างตัวเลขหรือข้อมูลภายในที่ไม่มีอยู่
5. เมื่อ Council ทำงานเสร็จ ให้อ่านคำตอบของแต่ละ Model และส่วนสรุปเปรียบเทียบ

#### Checkpoint

ระบุให้ได้อย่างละหนึ่งรายการ:

- จุดที่ Model เห็นตรงกัน
- จุดที่ Model เห็นต่างกัน
- ข้อมูลหรือมุมมองที่มีเพียง Model ใด Model หนึ่งเสนอ
- Citation ที่สนับสนุน Recommendation หรือข้อจำกัดที่ควรพิจารณาก่อนนำไปใช้

#### Expected Output

Research report พร้อม Citation และ Council summary ที่ช่วยให้ผู้เรียนระบุ Agreement, Disagreement และ Unique contribution ได้อย่างละหนึ่งรายการ รวมถึง Recommendation สำหรับการทดลอง 2 สัปดาห์

> **Fallback:** หากบัญชีไม่มี Model Council ให้ใช้ผลลัพธ์ตัวอย่างจากวิทยากรสำหรับ Prompt เดียวกัน แล้วทำ Checkpoint จากคำตอบของแต่ละ Model และส่วนสรุปที่เตรียมไว้

[← EX-03: Excel managed Skill](./ex-03-excel-managed-skill) | [EX-05: Researcher กับข้อมูลงานและเว็บ →](/02-get-started-with-agents/ex-05-researcher-work-and-web)
