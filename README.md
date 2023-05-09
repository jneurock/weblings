NOTE: This project is a work in progress. Check back later to see more progress.

# Weblings

Welcome to Weblings<sup>[<a href="#inspiration">1</a>]</sup>! This project
contains a series of broken web pages. By fixing them, you’ll learn how to read
and write code in languages for the web like HTML, CSS and JavaScript. You’ll
also be introduced to a few tools web developers use to build and test web
applications (think Facebook, Twitter, etc.) which feature many highly
interactive components.

These broken web pages need your help!

## Intended Audience

This project is intended for beginners interested in dipping their toes into web
development. Each exercise is self-contained and self-explained but you’re
encouraged to check out these additional learning resources:

* [Learn HTML](https://web.dev/learn/html/)
* [Learn CSS](https://web.dev/learn/css/)
* [MDN Web Docs](https://developer.mozilla.org/en-US/)
* [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### Included Topics

<p>
  <details>
    <summary>HTML (HyperText Markup Language)</summary>
    <ul>
      <li>Document structure</li>
      <li>Metadata</li>
      <li>Semantic markup</li>
      <li>Typography</li>
      <li>Attributes</li>
      <li>Links</li>
      <li>Lists</li>
      <li>Navigation</li>
      <li>Tables</li>
      <li>Forms</li>
      <li>Images</li>
      <li>Audio and video</li>
    </ul>
  </details>
  <details>
    <summary>CSS (Cascading Style Sheets)</summary>
    <ul>
      <li>Box model</li>
      <li>Selectors</li>
      <li>Cascade</li>
      <li>Specificity</li>
      <li>Inheritance</li>
      <li>Color</li>
      <li>Sizing</li>
      <li>Spacing</li>
      <li>Layout</li>
      <li>Flexbox</li>
      <li>Grid</li>
      <li>Pseudo-classes</li>
      <li>Borders</li>
      <li>Shadows</li>
      <li>Animations</li>
      <li>Transitions</li>
    </ul>
  </details>
  <details>
    <summary>JavaScript</summary>
    <ul>
      <li>TBD</li>
    </ul>
  </details>
</p>

## Getting Started

Getting started will probably be difficult if you’ve *never* programmed before
but guidance is provided to help install and understand some of the required
tools before you get going. There’s no need to become very familiar with these
tools just yet; you’ll see them a bit more in-depth as you progress.

The code you’ll be fixing exists in web pages. These pages are intended to be
displayed in web browsers; however, determining if you’ve fixed the broken pages
would be quite difficult if you could only inspect these pages by looking at
them in a browser. Thankfully, many tools exist to help test your code and
ensure the broken pages have been fixed. Before you dive in, you’ll need to
install some software<sup>[<a href="#permissions">2</a>]</sup>.

You’re going to edit some code which means you’ll need a program that can edit
the files that contain the code. While you *could* use any text editor to do
this, one that’s intended specifically for code only makes sense. There are too
many too count so here are some recommendations to get started quickly: TBD.
Over time, you’ll probably explore the many options out there for writing code
so don’t worry too much about picking the best one when you’re just getting
started.

You’re also going to be typing commands into your computer in order to test your
code fixes and install the necessary software (TODO: Refer to note). To do this,
you’ll use a terminal, i.e., a text-based interface to your computer. There are
too many terminal options to list here but, thankfully, your operating system
includes one. For macOS and Linux users, TBD. For Windows users, TBD. You can,
of course, install a different terminal, if you’d like.

### Download or Clone the Project

If you’re already familiar with Git, the version control system, then you
probably don’t need much help cloning the project’s repository and getting all
the necessary tools installed. If you’ve never heard of Git, or a version
control system, then you can
[download the project here](https://github.com/jneurock/weblings/archive/refs/heads/main.zip).

### Installation Script

Since there are enough tools needed that it could be daunting to install them
all one-by-one, an installation script is included to get everything set up for
you. Should any of the steps in the script fail, hope is not lost. Instructions
for installing the individual tools are included below.

Choose the right script for your operating system.

#### For macOS Users

TBD

#### For Windows Users

TBD

#### For Linux Users

TBD

#### Installing Tools One-By-One

Note: Skip this section if you used the installation script and had no issues.

In case the installation script doesn’t work for you, or you’d like to install
things yourself, here’s an overview of the tools you need to install and *how*
to install them.

TBD

## Fixing the First Problem

Now that you have all required tools installed, you’re ready to fix the first
problem. To start, open your terminal and navigate to the directory that
contains this project.

Now run the following command:

`npm run weblings`

This will start a script that runs the tests to check whether or not the code
has been fixed. When a test fails, you’ll see which test it was and in which
file the error was found.

### Edit the Code

The code for the all the web pages to fix can be found in the `exercises`
directory. The first one is found at `exercises/01_html_doctype.html`. Open this
file in your code editor. You’ll see a lot of text describing the problem. Not
every broken page will contain as much explanatory text as the first one. It
depends on the problem.

Fix the code and save the file. If Weblings is running in your terminal, saving
the file will cause the tests to run again automatically. Once you’ve finished
solving the first problem, the tests will check the next broken page.

### You Can Specify a Single Test

By default, this project is designed to check every broken web page, one after
another. As soon as you fix one broken page, you can see which page to fix
next. If you prefer, you can check one web page at a time.

You can specify which page to check with a flag. For example, to check the first
file run:

`npm run weblings -- exercise 01_html_doctype`

## Inspiration

[1] Weblings was directly inspired by Ziglings for the Zig language, which
itself was inspired by Rustlings for the Rust language, among other things.
These languages are very different from the ones covered in this project but, if
you’re interested in systems programming or general purpose languages, you are
very encouraged to give them a try, too!

<!--
  TODO:
    * Mention the HTML, CSS and JavaScript resources that inspired the exercises
      in the project.
-->

## Contributing

Please see
[CONTRIBUTING](https://github.com/jneurock/weblings/blob/main/CONTRIBUTING.md)
in this repo for the full details.

## Notes

### Permissions

[2] Your user account will need to be privileged enough to install software. If
you don’t have permission to install the required software, ask your computer’s
administrator for support.
