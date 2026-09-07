# EX-08: สร้าง Focus Time Campaign Kit

ทีมสื่อสารในองค์กร มีหน้าที่ในการสร้างประกาศภายใน และภาพประกอบที่ถูกต้องตามข้อมูลชุดเดิมซ้ำหลายครั้ง พวกเราจะสร้าง Agent ที่มีทั้ง Knowledge และ Tools เพื่อช่วยทำงานนี้



## Scenario: สร้างชุดสื่อสำหรับ Focus Time Pilot

### Practice 1: Create the campaign specialist

#### Steps

ใน Practice นี้ พวกเราจะสร้าง Agent ตัวที่สองสำหรับงานสื่อสารภายใน

1. เปิด **New agent**
2. Copy ข้อความนี้ไปวางในหน้า **Describe**

```text
Create an agent named Focus Time Campaign Kit.

This agent creates accurate internal campaign materials using the approved campaign brief and communication guide.

It should:
- Use the supplied Knowledge for campaign facts
- Write concise Thai-first employee communications
- Create downloadable campaign documents
- Generate simple supporting visuals
- Clearly report when required campaign information is missing
- Never invent dates, policies, benefits, results, or company claims
```

3. เปิด **Configure** และตรวจสอบ Configuration ที่สร้างขึ้น

#### Checkpoint

- Agent มีหน้าที่สร้างสื่อสำหรับ Campaign เดียวอย่างชัดเจน

### Practice 2: Add Knowledge and Tools

#### Steps

ใน Practice นี้ พวกเราจะเพิ่มข้อมูลที่ Agent ต้องรู้และเปิดความสามารถที่ใช้สร้างชิ้นงาน

1. Upload [focus-time-pilot-brief.docx](/files/focus-time-pilot-brief.docx) และ [internal-communication-guide.pdf](/files/internal-communication-guide.pdf) ใน **Knowledge**
2. เปิด **Only use specified sources**
3. เปิด **Create documents, charts, and code**
4. เปิด **Create images**
5. เพิ่ม Starter Prompt ชื่อ `Create launch kit` และ Prompt `Create the Focus Time launch kit`

#### Checkpoint

- Knowledge มีสองไฟล์
- Capabilities สำหรับสร้าง Document และ Image เปิดใช้งาน

### Practice 3: Test the announcement

#### Steps

ใน Practice นี้ พวกเราจะตรวจสอบว่า Agent สร้างประกาศตามข้อเท็จจริงและ Communication Guide

1. เปิด **Try it** แล้ว Copy Prompt นี้ไปวาง

```text
Create a Thai internal announcement for the Focus Time Pilot.

Keep it under 120 words and include:
- The purpose
- The schedule
- The exceptions
- What employees should do

Create it as a downloadable Word document.
Use only approved facts from the Knowledge sources.
```

2. ตรวจสอบ Schedule, Exceptions, Tone และความยาวกับ Knowledge ทั้งสองไฟล์

#### Checkpoint

- ประกาศมีข้อมูลครบและไม่มี Benefit หรือผลลัพธ์ที่ Source ไม่ได้ระบุ
- ได้ Downloadable document หรือข้อความที่จัดรูปแบบพร้อมนำไปสร้างเอกสาร

### Practice 4: Create Agent and generate a visual

#### Steps

ใน Practice นี้ พวกเราจะใช้ Image generation หลังจาก Create Agent แล้ว

1. เลือก **Create** และ **Go to agent**
2. Copy Prompt นี้ไปวาง

```text
Create a supporting visual for the Focus Time Pilot.

Use the visual direction in the communication guide.
Show a calm, modern workplace with people doing focused individual work.
Use blue and teal as the main colors.
Do not include logos, company names, statistics, or text inside the image.
```

3. เลือกภาพที่สอดคล้องกับ Brief มากที่สุด

#### Checkpoint

- ภาพไม่มี Logo, Claim หรือตัวเลขที่ไม่ได้รับอนุมัติ
- ผู้เรียนอธิบายได้ว่า Knowledge ข้อใดมีผลต่อประกาศและภาพ

#### Expected Output

Agent ชื่อ `Focus Time Campaign Kit` พร้อม Knowledge สองไฟล์, Starter Prompt, Document capability และ Image capability รวมถึงประกาศหนึ่งชิ้นและภาพประกอบหนึ่งภาพ

> **Fallback:** Image generation อาจไม่ทำงานใน **Try it** ให้ Create Agent ก่อนแล้วทดสอบจากหน้า Agent หากยังไม่พร้อม ให้ใช้ภาพตัวอย่างที่วิทยากรเตรียมไว้และทำ Checkpoint เดิม

[← EX-07: Busy Day Guide](./ex-07-busy-day-guide) | [ไป Hackathon Kick-off →](/04-hackathon-kickoff/)
