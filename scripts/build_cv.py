from pathlib import Path
from xml.sax.saxutils import escape
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public' / 'CV.pdf'
INK = colors.HexColor('#172d25')
TEXT = colors.HexColor('#222222')
styles = {
    'name': ParagraphStyle('name', fontName='Times-Bold', fontSize=21, leading=24, alignment=TA_CENTER, textColor=INK),
    'contact': ParagraphStyle('contact', fontName='Helvetica', fontSize=8.3, leading=11, alignment=TA_CENTER),
    'body': ParagraphStyle('body', fontName='Helvetica', fontSize=9.2, leading=11.5, textColor=TEXT),
    'small': ParagraphStyle('small', fontName='Helvetica', fontSize=8.6, leading=11, textColor=TEXT),
    'section': ParagraphStyle('section', fontName='Helvetica-Bold', fontSize=10, leading=13, textColor=INK, spaceBefore=5, spaceAfter=3),
    'bullet': ParagraphStyle('bullet', fontName='Helvetica', fontSize=9.2, leading=11.5, leftIndent=9, firstLineIndent=-7, spaceAfter=1.5),
}
W = A4[0] - 76
story=[]
def p(text, style='body'): return Paragraph(text, styles[style])
def section(title):
    story.append(p(title.upper(), 'section'))
    line=Table([['']],colWidths=[W],rowHeights=[1])
    line.setStyle(TableStyle([('LINEBELOW',(0,0),(-1,-1),0.5,INK)]))
    story.extend([line,Spacer(1,3)])
def entry(title,date,subtitle=None,bullets=()):
    row=Table([[p('<b>'+title+'</b>'),p(date,'small')]],colWidths=[W-113,113])
    row.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),0),('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),1)]))
    block=[row]
    if subtitle: block.append(p(subtitle,'small'))
    block += [p('- '+text,'bullet') for text in bullets]
    block.append(Spacer(1,3))
    story.append(KeepTogether(block))

story.append(p('Shengxin (Jack) Zhang','name'))
story.append(p('M.S. ECE Student | University of Illinois Urbana-Champaign','contact'))
story.append(p('217-417-9848 | <link href="mailto:jackshengxinz@gmail.com">jackshengxinz@gmail.com</link> | <link href="mailto:sz68@illinois.edu">sz68@illinois.edu</link>','contact'))
story.append(p('<link href="https://jackshengxinz.github.io/Jack-Zhang-s-Personal-Website/">Website</link> | <link href="https://github.com/jackshengxinz">GitHub</link> | <link href="https://www.linkedin.com/in/shengxin-zhang-b707bb280a">LinkedIn</link>','contact'))
section('Education')
entry('University of Illinois Urbana-Champaign','Current','M.S. in Electrical and Computer Engineering | Advisor: Varun Chandrasekaran')
entry('University of Illinois Urbana-Champaign','2022 - 2026','B.S. in Computer Engineering, Minor in Statistics | <b>GPA: 3.85/4.00</b>')
section('Publication')
story.append(p('<b>Do AI Reviewers Converge? Diversity Collapse in Model-Generated Peer Review</b>'))
story.append(p('<b>Accepted to Findings of EMNLP.</b> <link href="https://openreview.net/pdf?id=NdDKcU9HlU" color="#245c43">[Paper]</link>'))
story.append(p('Study of review diversity across 509 ICLR papers, 1,943 human reviews, and 10,172 reviews from five LLMs. Examines praise-to-critique balance and semantic convergence; specialized agents reduce but do not eliminate diversity collapse.','small'))
section('Work Experience')
entry('Shanghai AI Laboratory','Summer 2026','Scientific Simulation &amp; 3D Asset Generation | Shanghai, China',[
'Developed simulations of experiments involving chemical phenomena using Isaac Sim.',
'Worked on the generation of 3D scientific assets.'
])
entry('Shanghai Artificial Intelligence Research Institute','May - Jul 2023','Data Analyst Intern | Shanghai, China',[
'Built regression models for hospital construction costs and logistic regression pipelines for credit card fraud detection; performed data preprocessing and visualization.',
'Developed a PyTorch / YOLOv8 object detection model for soccer player detection.'
])
section('Research Experience')
entry('Multimodal Biometric Representation Research','Started Apr 2025','Summer Research Intern | Prof. Wenyan Dong, Westlake University | Hangzhou, China',[
'Studied relationships between voice and facial anthropometric features using physiological and vocal tract theory.',
'Built a voice-to-face prediction pipeline with uncertainty-aware 3D facial estimation; explored diffusion-based voice features aligned with facial geometry.'
])
entry('Fairness Guarantee under Demographic Shift','Jul - Aug 2023','Supervised by Prof. Pradeep Ravikumar, Carnegie Mellon University',[
'Designed and evaluated a fairness-aware algorithm under demographic, covariate, and marginal shifts, using PyTorch multilayer perceptrons for experimental validation.'
])
section('Teaching Experience')
entry('Graduate Teaching Assistant - ECE 385','','University of Illinois Urbana-Champaign',[
'Support students in designing, implementing, and debugging digital systems using SystemVerilog, FPGA development tools, and laboratory hardware.',
'Lead lab sessions and office hours covering combinational and sequential logic, finite-state machines, datapaths, memory, and processor design.',
'Review student designs, provide technical feedback, and grade assignments according to course standards.'
])
entry('Undergraduate Course Assistant - CS 124, ECE 110, STAT 400','Started Aug 2023','University of Illinois Urbana-Champaign',[
'Supported over 100 students through office hours in Java programming, circuit analysis, and statistical modeling.',
'Graded assignments and lab reports, mentored new teaching assistants, proctored exams, and coordinated with faculty.'
])
section('Selected Project')
entry('Serverless Workload Classification','Sep - Dec 2023','Mentored by Haoran Qiu, Ph.D. student',[
'Applied clustering and classification to OpenWhisk workloads, analyzing datasets by cloud platform characteristics.'
])
section('Technical Skills')
story.append(p('<b>Languages:</b> Python, Java, C/C++, SQL, SystemVerilog, LC-3, JavaScript, HTML','small'))
story.append(p('<b>Tools:</b> PyTorch, scikit-learn, React, Git, Isaac Sim | <b>Focus:</b> LLM evaluation, algorithmic fairness, scientific simulation, 3D scientific asset generation','small'))

doc=SimpleDocTemplate(str(OUT),pagesize=A4,rightMargin=38,leftMargin=38,topMargin=25,bottomMargin=25,title='Shengxin (Jack) Zhang - Curriculum Vitae',author='Shengxin (Jack) Zhang')
doc.build(story)
print(OUT)
