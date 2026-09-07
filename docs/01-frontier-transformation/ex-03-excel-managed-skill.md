# EX-03: สร้างแนวคิดด้วย Excel managed Skill

ทีมได้รวบรวมปัญหาที่พบระหว่างวันไว้ใน Excel แต่ยังไม่รู้ว่าจะเริ่มปรับปรุงเรื่องใด พวกเราจะใช้ managed Skill ชื่อ `idea-generation` เพื่อสร้างแนวคิดที่นำไปทดลองต่อได้


> **สิทธิ์ใช้งาน:** `idea-generation`, Copilot in Excel และ Office display language ภาษาอังกฤษ `ต้องตรวจสอบก่อนเริ่มอบรม`

## Scenario: จากปัญหางานสู่แนวคิด Hackathon

### Practice 1: เรียกใช้ `@idea-generation`

ใน Practice นี้ พวกเราจะเรียกใช้ managed Skill โดยตรงและให้สร้างแนวคิดสามรายการจากข้อมูลใน Workbook

#### Steps

1. ไปที่ One Drive ที่เราอัพโหลดไฟล์ก่อนหน้านี้ และเปิด <a href="/ms-agent-a-thon-2026/files/busy-workday-challenges.xlsx" download="busy-workday-challenges.xlsx">busy-workday-challenges.xlsx</a>
2. เปิด **Copilot** ใน Excel
3. Copy Prompt ภาษาอังกฤษด้านล่างไปวาง

```text
@idea-generation

Review the "Workday Challenges" table in this workbook.

Propose exactly 3 practical improvement ideas that could be tested within 2 weeks using existing Microsoft 365 tools.

For each idea, provide:
- Idea
- Problem addressed
- First step

Add the results to a new worksheet named "Ideas".

Use only the information in this workbook. Do not invent financial benefits, time savings, or expected results.
```

4. รอให้ Skill ทำงาน แล้วตรวจสอบผลลัพธ์

#### Checkpoint

- มีแนวคิดไม่เกินสามรายการ
- แต่ละรายการเชื่อมโยงกับ Challenge ใน Workbook
- ไม่มีตัวเลขผลประโยชน์หรือผลลัพธ์ที่ไม่ได้มาจากข้อมูล

#### Expected Output

Worksheet ชื่อ `Ideas` หรือผลลัพธ์แบบตารางที่มี `Idea`, `Problem addressed` และ `First step`

> **Fallback:** หาก Skill ใช้งานไม่ได้ ให้ดู Workbook ตัวอย่างจากวิทยากร ห้ามใช้ Prompt ปกติแล้วเรียกผลลัพธ์นั้นว่า managed Skill

[← EX-02: Memory](./ex-02-memory) | [EX-04: Researcher →](./ex-04-researcher-critique-council)
