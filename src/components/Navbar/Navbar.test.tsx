import React from "react";
import { screen, render, within, fireEvent } from "@testing-library/react";
import Navbar from ".";

const servicesFunction = jest.fn();
const aboutUsFunction = jest.fn();
const ourProcessFunction = jest.fn();
const contactUsFunction = jest.fn();

describe('Header of site', () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  it('display header as banner', () => {
    const banner = screen.getByRole('banner');
    expect(banner).toBeInTheDocument();
  });

  it('display navbar', () => {
    const navBar = screen.getByRole('navigation');
    expect(navBar).toBeInTheDocument();
  });

  // it('display 4 anchors', () => {
  //   const anchors = screen.getAllByRole('link');
  //   expect(anchors).toHaveLength(4);
  // });

  describe('Anchors of header', () => {
    let navBar:any;

    beforeEach(() => {
      navBar = screen.getByRole('navigation');
    });

    it('display 4 anchors', () => {
      const anchors = screen.getAllByRole('link');
      expect(anchors).toHaveLength(4);
    });

    describe('Serviços Ofertados', () => {
      let services:any;

      beforeEach(() => {
        services = within(navBar).getByText('Serviços Ofertados');
      });

      it('display Serviços Ofertados', () => {
        expect(services).toBeInTheDocument();
      });

      it('to have href services', () => {
        expect(services).toHaveAttribute('href', '#services');
      });
    });

    describe('Sobre Nós', () => {
      let aboutUs:any;

      beforeEach(() => {
        aboutUs = within(navBar).getByText('Sobre Nós');
      });

      it('display Sobre Nós', () => {
        expect(aboutUs).toBeInTheDocument();
      });

      it('to have href about-us', () => {
        expect(aboutUs).toHaveAttribute('href', '#about-us');
      });
    });

    describe('Nosso Processo', () => {
      let ourProcess:any;

      beforeEach(() => {
        ourProcess = within(navBar).getByText('Nosso Processo');
      });

      it('display our process', () => {
        expect(ourProcess).toBeInTheDocument();
      });

      it('to have href our-process', () => {
        expect(ourProcess).toHaveAttribute('href', '#our-process');
      });
    });

    describe('Entre em Contato', () => {
      let contactUs:any;

      beforeEach(() => {
        contactUs = within(navBar).getByText('Entre em Contato');
      });

      it('display Entre em Contato', () => {
        expect(contactUs).toBeInTheDocument();
      });

      it('to have href contact-us', () => {
        expect(contactUs).toHaveAttribute('href', '#contact-us');
      });
    });
  });
});